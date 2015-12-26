import angular from 'angular';

import config from './config';
import Logger from './logger';
import exception from './exception';
import toaster from 'angularjs-toaster'

export default angular.module('espackApp.common', [toaster])
    .config(config)
    .service('logger', Logger)
    .factory('exception', exception)
    .name;