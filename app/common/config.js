

export default function config($provide) {
    $provide.decorator('$exceptionHandler', extendExceptionHandler);
}



function extendExceptionHandler($delegate, toaster) {
    return function (exception, cause) {
        $delegate(exception, cause);
        var errorData = {
            exception: exception,
            cause: cause
        };

        console.log(errorData);
        //log errors to remote web server
        //toaster.error(exception.msg, errorData);
    };
}

config.$inject = ['$provide'];
extendExceptionHandler.$inject = ['$delegate'];