export default function config($stateProvider) {
    $stateProvider.state('messages', {
        url: '/',
        views: {
            main: {
                controller: 'MessagesController',
                templateUrl: 'messages/list.html',
                controllerAs: 'vm'
            }
        },
        data: {
            pageTitle: 'Home'
        }
    });
}

config.$inject = ['$stateProvider'];