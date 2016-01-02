describe('WhiteSpaceFilter', ()=> {

    let filterFactory, filterInstance;

    beforeEach(()=> {
        angular.mock.module('espackApp');
    });

    describe('#ctor', ()=> {

        beforeEach(()=> {
            _inject();
        });

        it('should exist', ()=> {
            expect(!!filterFactory).toBe(true);
        });

    });

    describe('#whiteSpaceFilter', ()=> {

        beforeEach(()=> {
            _inject();
        });

        it('should return same value', ()=> {
            let actual = 'Sample Text';
            filterInstance = filterFactory('whiteSpace');

            var expected = 'SampleText';
            expect(filterInstance(actual)).toEqual(expected);
        });

    });

    function _inject() {
        inject($filter=> {
            filterFactory = $filter;
        });
    }
});