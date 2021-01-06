if (!Zotero.AddPdfFromGenerator) {
    const loader = Components.classes["@mozilla.org/moz/jssubscript-loader;1"]
                             .getService(Components.interfaces.mozIJSSubScriptLoader);
    ['addpdffromgenerator'].forEach((scriptName) => {
        loader.loadSubScript(`chrome://addpdffromgenerator/content/${scriptName}.js`);
    });
}
