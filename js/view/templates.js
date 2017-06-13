this["App"] = this["App"] || {};
this["App"]["templates"] = this["App"]["templates"] || {};
this["App"]["templates"]["categoryItems"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <option data-value=\"data-all\" data-property=\"category\" class=\"menu-source-item\">Not important</option>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                <option data-value=\""
    + alias2(alias1(depth0, depth0))
    + "\" data-property=\"category\" class=\"menu-source-item\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"dropdown\">\r\n    <div><span>Select category</span></div>\r\n    <select class=\"dropdown-content category-sources source_filter_class\">\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.categories : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </select>\r\n</div>";
},"useData":true});
this["App"]["templates"]["countryItems"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <option data-value=\"data-all\" data-property=\"country\" class=\"menu-source-item\">Not important</option>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.countries : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                <option data-value=\""
    + alias2(alias1(depth0, depth0))
    + "\" data-property=\"country\" class=\"menu-source-item\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"dropdown\">\r\n    <div><span>Select country</span></div>\r\n    <select class=\"dropdown-content country-sources source_filter_class\">\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.countries : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </select>\r\n</div>";
},"useData":true});
this["App"]["templates"]["emptyNewsBlock"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"error_news_class com-md-8\"><span><h2>No news to display</h2></span></div>";
},"useData":true});
this["App"]["templates"]["languageItems"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "          <option data-value=\"data-all\" data-property=\"language\" class=\"menu-source-item\">Not important</option>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.languages : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "              <option data-value=\""
    + alias2(alias1(depth0, depth0))
    + "\" data-property=\"language\" class=\"menu-source-item\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"dropdown\">\r\n  <div><span>Select language</span></div>\r\n  <select class=\"dropdown-content language-sources source_filter_class\">\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.languages : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </select>\r\n</div>";
},"useData":true});
this["App"]["templates"]["news"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.articles : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n<div class=\"news-item-container container\">\r\n    \r\n        <a target=\"_blank\" class=\"article-url\" href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\r\n            <div class=\"article-image col-md-2\"><img src=\""
    + alias4(((helper = (helper = helpers.urlToImage || (depth0 != null ? depth0.urlToImage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"urlToImage","hash":{},"data":data}) : helper)))
    + "\" /></div>\r\n            <div class=\"article-content col-md-10\">\r\n                <h3>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\r\n        </a>\r\n    \r\n</div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "\r\n    <div class=\"error_news_class row col-md-4\"><span>No news to display</span></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.articles : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
this["App"]["templates"]["sourceItems"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.sources : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <option id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"menu-source-item\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "        <option class=\"menu-source-item\">No available sources</option>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"dropdown\">\r\n  <div><span>Available sources</span></div>\r\n  <select class=\"dropdown-content news-sources\">\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.sources : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "  </select>\r\n</div>";
},"useData":true});