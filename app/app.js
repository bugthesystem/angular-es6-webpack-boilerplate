import './layout/styles'

import angular from 'angular';
import uirouter from 'angular-ui-router';

import './templates';

import 'lodash';
import 'angular-animate';

import '../bower_components/angular-seo/angular-seo';

import config from './app.config';
import LayoutController from './layout/layout.controller.js';

import commonModule from './common';
import messagesModule from './messages';
import componentsModule from './components';
import filtersModule from './filters';
import servicesModule from './services';

angular.module('espackApp', [
        uirouter,
        commonModule, componentsModule, filtersModule, servicesModule, messagesModule,
        'templates', 'seo'
    ])
    .config(config)
    .controller('LayoutController', LayoutController);