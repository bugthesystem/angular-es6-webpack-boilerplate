import angular from 'angular';

import MessageService from './message.service.js';

export default angular.module('espackApp.services', [])
    .service('messageService', MessageService)
    .name;