(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['serp'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"kvH3mc BToiNc UK95Uc\">\n  <div class=\"Z26q7c UK95Uc jGGQ5e\" style=\"\">\n    <div class=\"P8ujBc v5yQqb jqWpsc\">\n      <span id=\"link\" class=\"cz3goc BmP5tf\">\n        <div class=\"y0NFKc\">\n          <div class=\"OSrXXb NJS5vf RNQ5ae\">\n            <div class=\"d8lRkd OSrXXb WQnrNe MUxGbd lyLwlc aLF0Z\">\n              <span class=\"yIn8Od\">\n                <span class=\"isfEv\">\n                  <span>\n                    <span class=\"H9lube\">\n                      <div class=\"eqA2re NjwKYd Vwoesf\">\n                        <img class=\"XNo5Ab\" src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"favicon") : depth0), depth0))
    + "\" style=\"height:18px;width:18px\" />\n                      </div>\n                    </span>\n                  </span>\n                </span>\n                <span class=\"wbJOMb\">\n                  <span class=\"pKWwCd q8U8x zydFU\">\n                    <div class=\"Aozhyc MUxGbd lyLwlc aLF0Z OSrXXb\" style=\"color:#202124\">\n                      <span class=\"BTu2cd\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"publisher") : depth0), depth0))
    + "</span>\n                    </div>\n                  </span>\n                  <span class=\"OSrXXb VN4UC\">\n                    <span class=\"yKd8Hd qzEoUe\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"canonical") : depth0), depth0))
    + "</span>\n                  </span>\n                </span>\n              </span>\n            </div>\n          </div>\n          <div class=\"oewGkc LeUQr MUxGbd v0nnCb\" aria-level=\"3\" role=\"heading\">\n            <div id=\"headline\" class=\"A9xod ynAwRc q8U8x MBeuO oewGkc LeUQr htnRc\" role=\"link\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"titleTag") : depth0), depth0))
    + "</div>\n          </div>\n        </div>\n      </span>\n    </div>\n  </div>\n\n  <div class=\"Z26q7c UK95Uc\" style=\"margin-top:2px;margin-right:16px;margin-left:16px;margin-bottom:12px\">\n    <div class=\"VwiC3b MUxGbd yDYNvb lEBKkf\" style=\"-webkit-line-clamp:3\">\n      <span class=\"MUxGbd wuQ4Ob WZ8Tjf\"><span>"
    + alias2((lookupProperty(helpers,"ago")||(depth0 && lookupProperty(depth0,"ago"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"datePublished") : depth0),{"name":"ago","hash":{},"data":data,"loc":{"start":{"line":41,"column":47},"end":{"line":41,"column":73}}}))
    + "</span> — </span>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"description") : depth0), depth0))
    + "\n    </div>\n  </div>\n</div>\n";
},"useData":true});
})();