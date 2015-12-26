export default class HomeCtrl {
    constructor($scope, logger, messageService) {
        this.messages = [];
        this.messageService = messageService;
        this.logger = logger;

        this.init();
    }

    init() {
        this.loadMessages().then(()=> {
            this.logger.info('init Home View');
        });
    }


    loadMessages() {
        return this.messageService.findAll().then(response=> {
            this.messages = response;
        });
    }
}

HomeCtrl.$inject = ['$scope', 'logger', 'messageService'];