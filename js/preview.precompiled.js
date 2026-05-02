(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['preview'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"discover-card\">\n  <div class=\"discover-card-publisher\">\n    <div class=\"discover-card-publisher-info\">\n      <img src=\""
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"favicon") : depth0), depth0)) != null ? stack1 : "")
    + "\" class=\"discover-card-publisher-favicon\">\n      <span class=\"discover-card-publisher-name\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"publisher") : depth0), depth0))
    + "</span>\n    </div>\n    <div class=\"discover-card-publisher-actions\">\n      <span class=\"discover-card-follow\">Follow</span>\n      <span class=\"material-symbols-outlined\">more_vert</span>\n    </div>\n  </div>\n  <img src=\""
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"imageUrl") : depth0), depth0)) != null ? stack1 : "")
    + "\" class=\"discover-card-img\">\n  <h2 class=\"discover-card-title\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "</h2>\n  <div class=\"discover-card-meta\">\n    <span class=\"discover-card-date\">"
    + alias2((lookupProperty(helpers,"ago")||(depth0 && lookupProperty(depth0,"ago"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"datePublished") : depth0),{"name":"ago","hash":{},"data":data,"loc":{"start":{"line":15,"column":37},"end":{"line":15,"column":63}}}))
    + "</span>\n    <div class=\"discover-card-actions\">\n      <span class=\"material-symbols-outlined\">favorite</span>\n      <span class=\"material-symbols-outlined\">share</span>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
})();