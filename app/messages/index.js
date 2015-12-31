import angular from 'angular';
import uirouter from 'angular-ui-router';

import config from './messages.config';

import MessagesController from './messages.controller.js';
import MessageList from './../components/message-list/message-list.directive.js';

export default angular.module('espackApp.messages', [uirouter])
    .config(config)
    .controller('MessagesController', MessagesController)
    .directive('messageList', ()=>new MessageList)
    .name;