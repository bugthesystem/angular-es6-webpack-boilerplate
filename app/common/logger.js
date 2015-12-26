export default class Logger {

    constructor(toaster){
        this.toaster = toaster;
    }

    info(message) {
        this.toaster.pop({
            type: 'info',
            body: message
        });
    }

    error(message) {
        this.toaster.pop({
            type: 'error',
            body: message
        });
    }
}

Logger.$inject = ['toaster'];
