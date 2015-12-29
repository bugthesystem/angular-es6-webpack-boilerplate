export default function exception(logger) {
    return {
        catcher
    };

    function catcher(message) {
        return function (reason) {
            logger.error(message, reason);
        };
    }
}

exception.$inject = ['logger'];