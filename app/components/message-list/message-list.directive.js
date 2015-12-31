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

    // Directive compile function
    compile() {

    }

    // Directive link function
    link() {

    }
}


class DirectiveController {
    constructor($scope) {
        //put your logic here
    }
}

DirectiveController.$inject = ['$scope'];