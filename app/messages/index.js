import angular from 'angular';
import uirouter from 'angular-ui-router';

import config from './messages.config';

import MessagesCtrl from './messages.controller.js';
import MessageList from './../components/message-list.directive.js';
import MessageService from './../services/message.service.js';

export default angular.module('espackApp.messages', [uirouter])
    .config(config)
    .controller('MessagesCtrl', MessagesCtrl)
    .service('messageService', MessageService)
    .directive('messageList', ()=>new MessageList)
    .name;