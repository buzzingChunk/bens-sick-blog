var path = require("path");

var DIST_DIR   = path.join(__dirname, "dist"),  
    CLIENT_DIR = path.join(__dirname, "public");

module.exports = {  
    context: CLIENT_DIR,

    entry: "./public/index.js",

    output: {
        path:     DIST_DIR,
        filename: "bundle.js"
    },

    resolve: {
        extensions: ['.js']
    }
};