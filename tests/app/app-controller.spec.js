describe('AppCtrl', ()=> {

    let appCtrl, mock, rootScope, controllerFactory;

    const pageTitleSuffix = ' | AngularJS + ES6 application using Webpack';

    beforeEach(angular.mock.module('espackApp'));

    describe('#construct', ()=> {

        beforeEach(()=> {
            _inject();
        });

        it('should exist', ()=> {
            appCtrl = controllerFactory('AppCtrl', mock);
            expect(!!appCtrl).toBe(true);
        });

        it('should define pageTitle property', ()=> {
            appCtrl = controllerFactory('AppCtrl', mock);
            expect(appCtrl.pageTitle).toBeDefined();
        });

        it('should set pageTitle by handling $stateChangeSuccess event', function () {

            let stateData = {
                data: {pageTitle: 'TEST'}
            };

            appCtrl = controllerFactory('AppCtrl', mock);
            rootScope.$broadcast('$stateChangeSuccess', stateData);

            expect(appCtrl.pageTitle).toBe(stateData.data.pageTitle + pageTitleSuffix)
        });
    });

    function _inject() {
        inject(($controller, $rootScope) => {
            rootScope = $rootScope;
            controllerFactory = $controller;

            mock = {
                $scope: $rootScope.$new()
            };
        });
    }
});