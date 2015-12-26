describe('Logger', ()=> {

    let loggerInstance, toaster, toasterMock;

    beforeEach(()=> {
        angular.mock.module(function ($provide) {
            $provide.service('toaster', function () {
                this.pop = jasmine.createSpy('pop');
            });
        });

        angular.mock.module('espackApp');
    });

    describe('#ctor', ()=> {

        beforeEach(()=> {
            _inject();
        });

        it('should exist', ()=> {
            expect(!!loggerInstance).toBe(true);
        });

    });

    describe('#info', ()=> {

        beforeEach(()=> {
            _inject();
        });

        it('should be defined', ()=> {
            expect(loggerInstance.info).toBeDefined();
        });

        it('should be defined', ()=> {

            let expectedMessage = 'TEST';

            spyOn(toasterMock, 'pop').and.callThrough();

            loggerInstance.info(expectedMessage);

            expect(toasterMock.pop).toHaveBeenCalledWith({type: 'info', body: expectedMessage});

        });
    });

    function _inject() {
        inject((logger, toaster) => {
            loggerInstance = logger;
            toasterMock = toaster;
        });
    }
});