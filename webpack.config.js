
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: "./js/app.js",
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.sass/, loader: ExtractTextPlugin.extract('css?sourceMap!sass?indentedSyntax') }
        ]
    },
    plugins: [
        new ExtractTextPlugin("main.css")
    ]
};