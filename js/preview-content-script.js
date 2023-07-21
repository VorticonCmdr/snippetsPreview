var ogImageElement = document.querySelectorAll('meta[property="og:image"]')[0];
var ogTitleElement = document.querySelectorAll('meta[property="og:title"]')[0];
var ogSitenameElement = document.querySelectorAll('meta[property="og:site_name"]')[0];
var ogDescriptionElement = document.querySelectorAll('meta[property="og:description"]')[0];
var descriptionElement = document.querySelectorAll('meta[name="description"]')[0];
var canonicalElement = document.querySelectorAll('link[rel="canonical"]')[0];
var schemaElements = [...document.querySelectorAll('script[type="application/ld+json"]')];
var htmlElement = document.getElementsByTagName('html')[0];

var ogData = {
  title: ogTitleElement?.content || document.title,
  titleTag: document.title,
  publisher: ogSitenameElement?.content || '',
  description: descriptionElement?.content || ogDescriptionElement?.content || '',
  imageUrl: completeUrl(ogImageElement?.content) || 'css/placeholder.svg',
  canonical: completeUrl(canonicalElement ? canonicalElement.href : document.location.href),
  language: htmlElement?.lang || navigator.language || 'en'
};
var gFav = new URL('https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.google.com&client=NEWS_360&size=48&type=FAVICON&fallback_opts=TYPE,SIZE,URL');
var u = new URL(document.location.href);
gFav.searchParams.set('url', u.origin);
ogData['favicon'] = gFav.href;

function completeUrl(uri) {
  if (uri === undefined) {
    return uri;
  }
  try {
    return new URL(uri, document.baseURI).href;
  } catch (e) {
    console.error(`error: ${uri}\n${e.message}`);
  }
  return uri;
}

schemaElements.forEach((schemaElement, i) => {
  let schemaObj = JSON.parse(schemaElement.textContent);
  let publisherObject = getValues(schemaObj,'publisher')[0];
  if (publisherObject) {
    if (publisherObject["@type"] == "Organization") {
      ogData['publisher'] = publisherObject["name"];
    }
  }

  let articleDate = getValues(schemaObj,'dateModified')[0] || getValues(schemaObj,'datePublished')[0];
  if (articleDate) {
    ogData['datePublished'] = articleDate;
  }

});

function getValues(obj, key) {
  var objects = [];
  for (var i in obj) {
    if (!obj.hasOwnProperty(i)) continue;
    if (i == key) {
      objects.push(obj[i]);
    } else if (typeof obj[i] == 'object') {
      objects = objects.concat(getValues(obj[i], key));
    }
  }
  return objects;
}

var img = new Image();
img.onload = function(){
  var height = img.height;
  var width = img.width;

  ogData['square'] = (height == width);
  console.log(ogData);
}
img.src = ogImageElement?.content;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    if (request.type === "msg_from_preview") {
      sendResponse(ogData);
    } else {
      console.log(request);
    }

  }
);
