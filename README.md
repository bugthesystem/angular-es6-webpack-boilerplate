# Angularjs ES6 Webpack boilerplate
Angular 1.5.9 + ES6 application boilerplate with testing practices
[![Dependency Status](https://david-dm.org/ziyasal/ng-espack-boilerplate.svg)](https://david-dm.org/ziyasal/ng-espack-boilerplate) [![devDependency Status](https://david-dm.org/ziyasal/ng-espack-boilerplate/dev-status.svg)](https://david-dm.org/ziyasal/ng-espack-boilerplate#info=devDependencies) [![Build Status](https://travis-ci.org/ziyasal/ng-espack-boilerplate.svg)](https://travis-ci.org/ziyasal/ng-espack-boilerplate) [![Coverage Status](https://coveralls.io/repos/ziyasal/ng-espack-boilerplate/badge.svg?branch=master&service=github)](https://coveralls.io/github/ziyasal/ng-espack-boilerplate?branch=master) 

>_Inspired from [angular-webpack-workflow](https://github.com/Foxandxss/angular-webpack-workflow)_

##Features
- [x] [Webpack](https://webpack.github.io/) Setup
  - [x] [Babel](https://babeljs.io/)
  - [x] [Isparta](https://github.com/douglasduteil/isparta) [Instrumenter Loader](https://github.com/ColCh/isparta-instrumenter-loader)
  - [x] [Bootstrap](http://getbootstrap.com/)
- [x] Gulp.js Setup
  - [x] [Angular Template Cache](https://github.com/miickel/gulp-angular-templatecache)
  - [x] [Webpack](https://webpack.github.io/)
  - [x] [ESLint](http://eslint.org/blog/2014/11/es6-jsx-support/)
- [x] Basic App Structure by following [Angular Style Guide](https://github.com/johnpapa/angular-styleguide)
- [x] SEO ready configuration using [angular-seo](https://github.com/steeve/angular-seo)
- [x] Full fake REST API using [json-server](https://github.com/typicode/json-server)
- [x] Testing Structure by following [official docs](https://docs.angularjs.org/guide/unit-testing) and [Testing Angular](https://github.com/daniellmb/angular-test-patterns)
  - [x] [Karma](http://karma-runner.github.io/0.13/index.html)
  - [x] [Jasmine](http://jasmine.github.io/2.0/introduction.html)
  - [x] [PhantomJS](http://phantomjs.org/)
  - [x] Controller test
  - [x] Service test
  - [x] Directive test
  - [x] Filter Test
  - [x] Http interceptor Test
  

##Install
Clone repo and install npm and bower packages;

```
git clone https://github.com/ziyasal/ng-espack-boilerplate.git
cd ng-espack-boilerplate
npm install
bower install
gulp
```

## Development
All scripts are run with `npm run [script]`, for example: `npm run test`.

`build`        - generate a minified build to `public` folder  
`test`         - run all tests  
`test:live`    - continuously run unit tests watching for changes  
`eslint:app`   - lint code in `app` folder  
`eslint:tests` - lint code in `tests` folder  

See what each script does by looking at the scripts section in `package.json`.

License
=======

Code and documentation are available according to the `MIT` License (see [LICENSE](https://github.com/ziyasal/ng-espack-boilerplate/blob/master/LICENSE)).
