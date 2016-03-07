'use strict';

// Modules
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function makeWebpackConfig(options) {
    /**
     * Environment type
     * BUILD is for generating minified builds
     * TEST is for generating test builds
     */
    var BUILD = !!options.BUILD;
    var TEST = !!options.TEST;

    var config = {};

    if (TEST) {
        config.entry = {}
    } else {
        config.entry = {
            app: './app/app.js'
        }
    }

    if (TEST) {
        config.output = {}
    } else {
        config.output = {
            // Absolute output directory
            path: __dirname + '/public',

            publicPath: BUILD ? '/' : 'http://localhost:8080/',

            filename: BUILD ? '[name].[hash].js' : '[name].bundle.js',
            //filename: 'bundle.js',

            chunkFilename: BUILD ? '[name].[hash].js' : '[name].bundle.js'
            //chunkFilename: BUILD ? 'bundle.js' : 'bundle.js'
        }
    }

    if (TEST) {
        config.devtool = 'inline-source-map';
    } else if (BUILD) {
        config.devtool = 'source-map';
    } else {
        config.devtool = 'eval-source-map';
        config.debug = false;
        config.output.pathinfo = true;
        config.cache = true;
        config.watch = true;
    }

    config.module = {
        preLoaders: [],
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'file'
        }, {
            test: /\.html$/,
            loader: 'raw'
        }]
    };

    if (TEST) {
        config.module.preLoaders.push({
            test: /\.js$/,
            exclude: [
                /node_modules/,
                /bower_components/,
                /\.spec\.js$/,
                /tests/
            ],
            loader: 'isparta-instrumenter'
        });
    }

    var cssLoader = {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
    };

    if (TEST) {
        cssLoader.loader = 'null';
    }

    config.module.loaders.push(cssLoader);

    config.postcss = [
        autoprefixer({
            browsers: ['last 2 version']
        })
    ];

    config.plugins = [
        new ExtractTextPlugin('[name].[hash].css', {
            disable: !BUILD || TEST
        }),

        // Provide jquery
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ];

    if (!TEST) {
        config.plugins.push(
            new HtmlWebpackPlugin({
                template: './public/index.html',
                inject: 'body'
            })
        )
    }

    if (BUILD) {
        config.plugins.push(
            new webpack.NoErrorsPlugin(),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin()
        );
    }

    return config;
};
