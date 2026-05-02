(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['serp'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"serp-result\">\n  <div class=\"serp-header\">\n    <div class=\"serp-favicon-wrap\">\n      <img class=\"serp-favicon\" src=\""
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"favicon") : depth0), depth0)) != null ? stack1 : "")
    + "\" alt=\"\">\n    </div>\n    <div class=\"serp-source\">\n      <div class=\"serp-publisher\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"publisher") : depth0), depth0))
    + "</div>\n      <div class=\"serp-url\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"origin") : depth0), depth0))
    + "</div>\n    </div>\n    <div class=\"serp-more\">\n      <svg focusable=\"false\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n        <path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"></path>\n      </svg>\n    </div>\n  </div>\n  <a class=\"serp-headline\" href=\""
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"canonical") : depth0), depth0)) != null ? stack1 : "")
    + "\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"titleTag") : depth0), depth0))
    + "</a>\n  <div class=\"serp-description\">\n    <span class=\"serp-date\">"
    + alias2((lookupProperty(helpers,"ago")||(depth0 && lookupProperty(depth0,"ago"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"datePublished") : depth0),{"name":"ago","hash":{},"data":data,"loc":{"start":{"line":18,"column":28},"end":{"line":18,"column":54}}}))
    + "</span> &mdash; "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"description") : depth0), depth0))
    + "\n  </div>\n</div>\n";
},"useData":true});
})();