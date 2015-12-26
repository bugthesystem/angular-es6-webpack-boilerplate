var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var gutil = require('gulp-util');

var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var WebpackDevServer = require('webpack-dev-server');

var webpackDevCfg = Object.create(webpackConfig);
webpackDevCfg.devtool = 'sourcemap';
webpackDevCfg.debug = true;
var devCompiler = webpack(webpackDevCfg);

gulp.task('tpl-cache', function () {
    return gulp.src('app/**/*html')
        .pipe(templateCache({
            standalone: true
        }))
        .pipe(gulp.dest('app'));
});


gulp.task('build-dev', ['tpl-cache', 'webpack:build-dev'], function () {
    gulp.watch(['app/**/*'], ['tpl-cache', 'webpack:build-dev']);
});

gulp.task('webpack:dev-server', function (callback) {
    new WebpackDevServer(devCompiler, {
        contentBase: 'public',
        hot: true,
        filename: 'bundle.js',
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }).listen(8080, 'localhost', function (err) {
        if (err) throw new gutil.PluginError('webpack-dev-server', err);

        gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');

        // keep the server alive or continue?
        callback();
    });
});

gulp.task('webpack:build-dev', function (callback) {
    // run webpack
    devCompiler.run(function (err, stats) {
        if (err) throw new gutil.PluginError('webpack:build-dev', err);
        gutil.log('[webpack:build-dev]', stats.toString({
            colors: true
        }));
        callback();
    });
});


gulp.task('json-server', function () {
    require('./index');
});

gulp.task('default', ['json-server', 'webpack:dev-server']);