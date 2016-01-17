export default class MessageList {
    constructor() {
        this.templateUrl = 'components/message-list/message-list.directive.html';
        this.restrict = 'E';
        this.scope = {
            messages: '=messages',
            header: '=header'
        };

        this.controller = DirectiveController;
        this.controllerAs = 'vm';
        this.bindToController = true;
    }

    link(scope, attrs) {
        //
    }
}

class DirectiveController {
    constructor($scope) {
        //put your logic here
    }
}

DirectiveController.$inject = ['$scope'];
