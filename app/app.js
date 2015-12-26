import './styles'

import angular from 'angular';
import uirouter from 'angular-ui-router';

import './templates';

import 'lodash';
import 'angular-animate';

import '../bower_components/angular-seo/angular-seo';

import config from './app.config';
import AppCtrl from './app.controller';

import home from './home';
import common from './common';

angular.module('espackApp', [uirouter, home, common, 'templates', 'seo'])
    .config(config)
    .controller('AppCtrl', AppCtrl);