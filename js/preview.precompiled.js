(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['preview'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div>\n  <span class=\"card discover-card\">\n    <div class=\"card-body\">\n      <div class=\"row\" style=\"justify-content: space-between;\">\n        <div class=\"col-8\">\n          <h2 class=\"card-title discover-square-card-title\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "</h2>\n        </div>\n        <div class=\"col-auto\">\n          <img src=\""
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"imageUrl") : depth0), depth0)) != null ? stack1 : "")
    + "\" class=\"float-end discover-card-small-img rounded\">\n        </div>\n      </div>\n      <p class=\"float-start discover-card-infos\">\n        <img src=\""
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"favicon") : depth0), depth0)) != null ? stack1 : "")
    + "\" class=\"discover-card-favicon\">\n        <small class=\"text-muted discover-card-infos-text\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"publisher") : depth0), depth0))
    + "</small>\n        <small class=\"text-muted discover-card-infos-text\">"
    + alias2((lookupProperty(helpers,"ago")||(depth0 && lookupProperty(depth0,"ago"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"datePublished") : depth0),{"name":"ago","hash":{},"data":data,"loc":{"start":{"line":16,"column":59},"end":{"line":16,"column":85}}}))
    + "</small>\n      </p>\n      <div class=\"discover-card-infos float-end\">\n        <i class=\"bi bi-heart small ms-3\"></i>\n        <i class=\"bi bi-share small ms-3\"></i>\n        <i class=\"bi bi-three-dots-vertical small ms-3\"></i>\n      </div>\n    </div>\n  </span>\n</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div>\n  <span class=\"card discover-card\">\n    <img src=\""
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"imageUrl") : depth0), depth0)) != null ? stack1 : "")
    + "\" class=\"card-img-top discover-card-big-img\">\n    <div class=\"card-body\">\n      <h2 class=\"card-title discover-big-card-title\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "</h2>\n      <p class=\"float-start discover-card-infos\">\n        <img src=\""
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"favicon") : depth0), depth0)) != null ? stack1 : "")
    + "\" class=\"discover-card-favicon\">\n        <small class=\"text-muted discover-card-infos-text\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"publisher") : depth0), depth0))
    + "</small>\n        <small class=\"text-muted discover-card-infos-text\">"
    + alias2((lookupProperty(helpers,"ago")||(depth0 && lookupProperty(depth0,"ago"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"datePublished") : depth0),{"name":"ago","hash":{},"data":data,"loc":{"start":{"line":35,"column":59},"end":{"line":35,"column":85}}}))
    + "</small>\n      </p>\n      <div class=\"discover-card-infos float-end\">\n        <i class=\"bi bi-heart small ms-3\"></i>\n        <i class=\"bi bi-share small ms-3\"></i>\n        <i class=\"bi bi-three-dots-vertical small ms-3\"></i>\n      </div>\n    </div>\n  </span>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"square") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":45,"column":7}}})) != null ? stack1 : "");
},"useData":true});
})();