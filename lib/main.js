var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*.feedly.com",
  contentScriptFile: data.url("tagger.js")
});