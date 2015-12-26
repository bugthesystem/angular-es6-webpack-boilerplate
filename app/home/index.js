import angular from 'angular';
import uirouter from 'angular-ui-router';

import config from './home.config.js';

import HomeCtrl from './controllers/home.controller.js';
import MessageList from './directives/message-list.directive.js';
import MessageService from './services/message.service.js';

export default angular.module('espackApp.home', [uirouter])
    .config(config)
    .controller('HomeCtrl', HomeCtrl)
    .service('messageService', MessageService)
    .directive('messageList', ()=>new MessageList)
    .name;