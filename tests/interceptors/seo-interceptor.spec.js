describe("seoInterceptor", function () {

    const seoInterceptorName = "seoInterceptor";

    let seoInterceptor, httpProvider, httpBackend;
    beforeEach(angular.mock.module('espackApp', ($httpProvider)=> {
        httpProvider = $httpProvider;
    }));

    describe('#existence', () => {

        beforeEach(()=> {
            _inject();
        });

        it('should be added to $http interceptors', ()=> {

            var interceptorNames = httpProvider.interceptors
                .filter((item)=> item.prototype.constructor.name === seoInterceptorName)
                .map((item)=>item.prototype.constructor.name);

            expect(interceptorNames.length).toEqual(1);
            expect(interceptorNames).toEqual([seoInterceptorName])

        });

    });

    function _inject() {
        inject(($httpBackend) => {
            httpBackend = $httpBackend;
        });
    }

});