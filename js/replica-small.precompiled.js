(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['replica-small'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "<span class=\"live-badge-mini\">LIVE</span>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"search-result layout-small-horizontal\">\n  <a class=\"result-link\" href=\""
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"canonical") : depth0), depth0)) != null ? stack1 : "")
    + "\">\n    <div class=\"result-content\">\n      <div class=\"thumbnail-container\">\n        <img class=\"thumbnail-square\" src=\""
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"imageUrl") : depth0), depth0)) != null ? stack1 : "")
    + "\" alt=\"\">\n      </div>\n      <div class=\"info-container\">\n        <div class=\"source-header\">\n          <div class=\"source-info\">\n            <img class=\"favicon\" src=\""
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"favicon") : depth0), depth0)) != null ? stack1 : "")
    + "\" alt=\"\">\n            <span class=\"source-name\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"publisher") : depth0), depth0))
    + "</span>\n          </div>\n          <div class=\"more-icon\">\n            <svg focusable=\"false\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n              <path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"></path>\n            </svg>\n          </div>\n        </div>\n        <h3 class=\"result-title\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "</h3>\n        <div class=\"result-meta\">\n          "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"live") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":75}}})) != null ? stack1 : "")
    + "\n          <span class=\"date\">"
    + alias2((lookupProperty(helpers,"ago")||(depth0 && lookupProperty(depth0,"ago"))||container.hooks.helperMissing).call(alias3,(depth0 != null ? lookupProperty(depth0,"datePublished") : depth0),{"name":"ago","hash":{},"data":data,"loc":{"start":{"line":22,"column":29},"end":{"line":22,"column":55}}}))
    + "</span>\n        </div>\n      </div>\n    </div>\n  </a>\n</div>\n";
},"useData":true});
})();