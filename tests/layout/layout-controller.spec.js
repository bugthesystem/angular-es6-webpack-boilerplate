describe('LayoutController', ()=> {

    let LayoutController, mock, rootScope, controllerFactory;

    const pageTitleSuffix = ' | AngularJS + ES6 application using Webpack';

    beforeEach(angular.mock.module('espackApp'));

    describe('#construct', ()=> {

        beforeEach(()=> {
            _inject();
        });

        it('should exist', ()=> {
            LayoutController = controllerFactory('LayoutController', mock);
            expect(!!LayoutController).toBe(true);
        });

        it('should define pageTitle property', ()=> {
            LayoutController = controllerFactory('LayoutController', mock);
            expect(LayoutController.pageTitle).toBeDefined();
        });

        it('should set pageTitle by handling $stateChangeSuccess event', function () {

            let stateData = {
                data: {pageTitle: 'TEST'}
            };

            LayoutController = controllerFactory('LayoutController', mock);
            rootScope.$broadcast('$stateChangeSuccess', stateData);

            expect(LayoutController.pageTitle).toBe(stateData.data.pageTitle + pageTitleSuffix)
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