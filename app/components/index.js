import angular from 'angular';

import MessageList from './message-list/message-list.directive';

export default angular
    .module('espackApp.components', [])
    .directive('messageList', ()=>new MessageList)
    .name;