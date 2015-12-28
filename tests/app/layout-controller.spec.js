describe('LayoutCtrl', ()=> {

    let LayoutCtrl, mock, rootScope, controllerFactory;

    const pageTitleSuffix = ' | AngularJS + ES6 application using Webpack';

    beforeEach(angular.mock.module('espackApp'));

    describe('#construct', ()=> {

        beforeEach(()=> {
            _inject();
        });

        it('should exist', ()=> {
            LayoutCtrl = controllerFactory('LayoutCtrl', mock);
            expect(!!LayoutCtrl).toBe(true);
        });

        it('should define pageTitle property', ()=> {
            LayoutCtrl = controllerFactory('LayoutCtrl', mock);
            expect(LayoutCtrl.pageTitle).toBeDefined();
        });

        it('should set pageTitle by handling $stateChangeSuccess event', function () {

            let stateData = {
                data: {pageTitle: 'TEST'}
            };

            LayoutCtrl = controllerFactory('LayoutCtrl', mock);
            rootScope.$broadcast('$stateChangeSuccess', stateData);

            expect(LayoutCtrl.pageTitle).toBe(stateData.data.pageTitle + pageTitleSuffix)
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