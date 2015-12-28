import './layout/styles'

import angular from 'angular';
import uirouter from 'angular-ui-router';

import './templates';

import 'lodash';
import 'angular-animate';

import '../bower_components/angular-seo/angular-seo';

import config from './app.config';
import LayoutController from './layout/layout.controller.js';

import home from './messages';
import common from './common';

angular.module('espackApp', [uirouter, home, common, 'templates', 'seo'])
    .config(config)
    .controller('LayoutController', LayoutController);