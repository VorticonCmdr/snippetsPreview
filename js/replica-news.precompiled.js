(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['replica-news'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"live-badge\">LIVE</div>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"search-result layout-news-badge\">\n  <a class=\"result-link\" href=\""
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"canonical") : depth0), depth0)) != null ? stack1 : "")
    + "\">\n    <div class=\"thumbnail-container-badge\">\n      <img class=\"thumbnail-wide\" src=\""
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"imageUrl") : depth0), depth0)) != null ? stack1 : "")
    + "\" alt=\"\">\n      "
    + ((stack1 = lookupProperty(helpers,"if").call(alias2,(depth0 != null ? lookupProperty(depth0,"live") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":5,"column":64}}})) != null ? stack1 : "")
    + "\n    </div>\n    <div class=\"info-container-padded\">\n      <div class=\"result-title-news\">"
    + alias3(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "</div>\n      <div class=\"result-meta-small\">\n        <span class=\"date\">"
    + alias3((lookupProperty(helpers,"ago")||(depth0 && lookupProperty(depth0,"ago"))||container.hooks.helperMissing).call(alias2,(depth0 != null ? lookupProperty(depth0,"datePublished") : depth0),{"name":"ago","hash":{},"data":data,"loc":{"start":{"line":10,"column":27},"end":{"line":10,"column":53}}}))
    + "</span>\n      </div>\n      <div class=\"source-footer\">\n        <div class=\"source-info-small\">\n          <div class=\"favicon-circle\">\n            <img class=\"favicon-small\" src=\""
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"favicon") : depth0), depth0)) != null ? stack1 : "")
    + "\" alt=\"\">\n          </div>\n          <span class=\"source-name-small\">"
    + alias3(alias1((depth0 != null ? lookupProperty(depth0,"publisher") : depth0), depth0))
    + "</span>\n        </div>\n      </div>\n    </div>\n  </a>\n</div>\n";
},"useData":true});
})();