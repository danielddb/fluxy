var webpack = require("webpack"),
    debug = process.env.NODE_ENV !== "production";

module.exports = {
    context: __dirname + "/src/js",
    entry: "./index",
    output: {
        path: __dirname + "/app/js",
        filename: "bundle.js",
        publicPath: __dirname
    },
    devtool: debug ? "inline-sourcemap" : null,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel?presets[]=react&presets[]=es2015', 'eslint?configFile=.eslintrc.json']
            }
        ]
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
} 