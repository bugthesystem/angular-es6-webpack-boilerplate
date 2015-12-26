
export default  function config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $locationProvider.hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    //TODO: Move to own file.
    $httpProvider.interceptors.push(['$q', '$injector', function seoInterceptor($q, $injector) {
        var $http;

        return {
            response: function (response) {
                $http = $http || $injector.get('$http');
                var $timeout = $injector.get('$timeout');
                var $rootScope = $injector.get('$rootScope');

                if ($http.pendingRequests.length < 1) {
                    $timeout(function () {
                        if ($http.pendingRequests.length < 1) {
                            $rootScope.htmlReady();
                        }
                    }, 700);
                    /*an 0.7 seconds safety interval, if there are no requests for 0.7 seconds,
                    it means that the app is through rendering*/
                }
                return response || $q.when(response);
            },
            responseError: function (response) {
                return $q.reject(response);
            }
        };
    }]);
}

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];