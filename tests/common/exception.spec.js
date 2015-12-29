describe('exception', ()=> {

    let exceptionInstance, loggerMock;

    beforeEach(()=> {
        angular.mock.module(function ($provide) {
            $provide.service('logger', function () {
                this.error = jasmine.createSpy('error');
            });
        });

        angular.mock.module('espackApp');
    });

    describe('#ctor', ()=> {

        beforeEach(()=> {
            _inject();
        });

        it('should exist', ()=> {
            expect(!!exceptionInstance).toBe(true);
        });

        it('should define catcher property', function () {

            expect(exceptionInstance.catcher).toBeDefined();
            expect(typeof exceptionInstance.catcher).toBe('function');
        });

    });

    function _inject() {
        inject((exception, logger) => {
            loggerMock = logger;
            exceptionInstance = exception;
        });
    }
});