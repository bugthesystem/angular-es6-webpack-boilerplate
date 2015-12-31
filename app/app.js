import './layout/styles'

import angular from 'angular';
import uirouter from 'angular-ui-router';

import './templates';

import 'lodash';
import 'angular-animate';

import '../bower_components/angular-seo/angular-seo';

import config from './app.config';
import LayoutController from './layout/layout.controller.js';

import common from './common';
import home from './messages';
import filters from './filters';
import services from './services';

angular.module('espackApp', [uirouter, common, filters, services, home, 'templates', 'seo'])
    .config(config)
    .controller('LayoutController', LayoutController);