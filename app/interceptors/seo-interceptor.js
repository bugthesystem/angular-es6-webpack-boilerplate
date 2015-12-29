export default function seoInterceptor($q, $injector) {

    let $http;

    return {
        response: (response) => {
            $http = $http || $injector.get('$http');
            let $timeout = $injector.get('$timeout');
            let $rootScope = $injector.get('$rootScope');

            if ($http.pendingRequests.length < 1) {
                $timeout(()=> {
                    if ($http.pendingRequests.length < 1) {
                        $rootScope.htmlReady();
                        console.log('[HTML] ready.');
                    }
                }, 700);
                /*an 0.7 seconds safety interval, if there are no requests for 0.7 seconds, it means that the layout is through rendering*/
            }
            return response || $q.when(response);
        },
        responseError: (response) => {
            return $q.reject(response);
        }
    };
}

seoInterceptor.$inject = ['$q', '$injector'];