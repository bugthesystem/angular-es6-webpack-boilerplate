import angular from 'angular';
import uirouter from 'angular-ui-router';

import config from './messages.config';

import MessagesController from './messages.controller.js';

export default angular.module('espackApp.messages', [uirouter])
    .config(config)
    .controller('MessagesController', MessagesController)
    .name;