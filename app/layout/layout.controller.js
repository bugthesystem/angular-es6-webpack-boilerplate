import angular from 'angular';

export default class LayoutCtrl {
    constructor($scope) {
        this.pageTitle = 'AngularJS + ES6 application using Webpack';

        $scope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams)=> {
            if (angular.isDefined(toState.data.pageTitle)) {
                this.pageTitle = `${toState.data.pageTitle} | AngularJS + ES6 application using Webpack`;
            }
        });
    }
}

LayoutCtrl.$inject = ['$scope'];
