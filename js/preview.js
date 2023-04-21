let cardTemplate = Handlebars.templates.preview;
let serpTemplate = Handlebars.templates.serp;
const $card = document.getElementById('card');
const $serp = document.getElementById('serp');
const $sourceLink = document.getElementById('sourceLink');

document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {type:"msg_from_preview"}, function(response){

      moment.locale(response.language);

      Handlebars.registerHelper('ago', function (value) {
        return moment(value).fromNow();
      });

      $sourceLink.textContent = response.canonical;
      $sourceLink.href = response.canonical;

      document.title = `${response.titleTag}`;

      $card.innerHTML = cardTemplate(response);
      $serp.innerHTML = serpTemplate(response);
      
    });
  });
});
