describe('WhiteSpaceFilter', ()=> {

    let filter,filterMock;


    beforeEach(()=> {
        angular.mock.module('espackApp');
    });

    describe('#ctor', ()=> {

        beforeEach(()=> {
            _inject();
        });

        it('should exist', ()=> {
            expect(!!filter).toBe(true);
        });

    });

    describe('#whiteSpaceFilter', ()=> {

        beforeEach(()=> {
            _inject();
        });

        it('should return same value', ()=> {
            let actual ='Sample Text';
            filterMock = filter('whiteSpace');

            var expected = 'SampleText';
            expect(filterMock(actual)).toEqual(expected);
        });

    });



    function _inject() {
        inject(($filter)=> {

            filter = $filter;

        });
    }
});