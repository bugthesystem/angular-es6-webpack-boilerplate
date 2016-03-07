
var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var gutil = require('gulp-util');

var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var WebpackDevServer = require('webpack-dev-server');

var webpackDevCfg = Object.create(webpackConfig);
webpackDevCfg.devtool = 'eval-source-map';
webpackDevCfg.debug = true;
webpackDevCfg.output.pathinfo = true;
webpackDevCfg.cache = true;
webpackDevCfg.watch = true;
        
var devCompiler = webpack(webpackDevCfg);

gulp.task('tpl-cache', function() {
  return gulp.src('app/**/*html')
    .pipe(templateCache({
      standalone: true
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('watch:html', function() {
  return gulp.watch(['app/**/*.html'], ['tpl-cache']);
});


gulp.task('webpack:dev-server', function(callback) {

  new WebpackDevServer(devCompiler, {
    contentBase: 'public',
    hot: true,
    filename: 'bundle.js',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }).listen(8080, 'localhost', function(err) {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);

    gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');

    callback();
  });
});

gulp.task('json-server', function() {
  require('./index');
});

gulp.task('default', ['json-server', 'watch:html', 'webpack:dev-server']);
