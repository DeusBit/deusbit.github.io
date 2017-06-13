function UrlBuilder(t,e,n,i){var r=this;return r.$lang=t,r.$categ=n,r.$count=e,r.url=i,r.getParameter=function(t){return"data-all"===t.data("value")?"":t.data("property")+"="+t.data("value")},r.appendParameter=function(t,e){return e?t+(t?"&":"")+e:t},r.buildUrl=function(){var i="";return i=r.appendParameter(i,r.getParameter(t)),i=r.appendParameter(i,r.getParameter(e)),i=r.appendParameter(i,r.getParameter(n)),i?r.url+"?"+i:r.url},r}function getSelectedOption(t){var e=$(t).get(0);return $(e.options[e.selectedIndex])}var DATA_HANDLER=function(){"use strict";var t={},e=new Set,n=new Set,i=new Set;return t.initData=function(t){for(var r=0;r<t.sources.length;r++){var o=t.sources[r];e.add(o.language),n.add(o.category),i.add(o.country)}},t.getLanguages=function(){return e},t.getCategories=function(){return n},t.getCountries=function(){return i},t.done=function(t,e){if("ok"===t.status)return e()},t}(),apiKey="36e6db75e3fd4e3dae66c987be68b464",CONTENT_HANDLER=function(){function t(t){t?$.getJSON("https://newsapi.org/v1/articles?source="+t+"&apiKey="+apiKey,function(t){DATA_HANDLER.done(t,function(){$(".news-container").html(App.templates.news(t))})}):$(".news-container").html(App.templates.emptyNewsBlock())}var e={};return e.drawSources=function(e,n){e.html(App.templates.sourceItems(n));var i=$(".news-sources");i.change(function(e){var n=e.target.options[e.target.options.selectedIndex];n&&t(n.id)}),i.trigger("change")},e}(),SOURCES_HANDLER=function(){var t={};return t.refreshSources=function(t,e){$.getJSON(t,function(t){DATA_HANDLER.done(t,function(){CONTENT_HANDLER.drawSources(e,t)})})},t}(),rootUrl="https://newsapi.org/v1/sources";$.getJSON(rootUrl,function(t){"use strict";DATA_HANDLER.done(t,function(){var e=$(".sources-container");CONTENT_HANDLER.drawSources(e,t),DATA_HANDLER.initData(t);var n={languages:Array.from(DATA_HANDLER.getLanguages())||[]};$(".languages-container").append(App.templates.languageItems(n));var i={categories:Array.from(DATA_HANDLER.getCategories())||[]};$(".categories-container").append(App.templates.categoryItems(i));var r={countries:Array.from(DATA_HANDLER.getCountries())||[]};$(".countries-container").append(App.templates.countryItems(r)),$(".source_filter_class").change(function(){var t=getSelectedOption(".language-sources"),n=getSelectedOption(".country-sources"),i=getSelectedOption(".category-sources"),r=new UrlBuilder(t,n,i,rootUrl);SOURCES_HANDLER.refreshSources(r.buildUrl(),e)})})});