export default function config($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        views: {
            main: {
                controller: 'HomeCtrl',
                templateUrl: 'home/views/index.tpl.html',
                controllerAs: 'vm'
            }
        },
        data: {
            pageTitle: 'Home'
        }
    });
}

config.$inject = ['$stateProvider'];