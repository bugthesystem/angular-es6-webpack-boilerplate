export default class MessageList {
    constructor() {
        this.templateUrl = 'home/views/message-list.directive.html';
        /*require*/
        this.restrict = 'E';
        this.scope = {
            messages: '=messages',
            header: '=header'
        };

        this.controller = MessageListCtrl;
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


class MessageListCtrl {
    constructor($scope) {
        //put your logic here
    }
}

MessageListCtrl.$inject = ['$scope'];