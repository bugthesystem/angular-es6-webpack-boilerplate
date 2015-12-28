describe('MessageListDirective', ()=> {

    let element, scope, compile, rootScope,
        validTemplate = '<message-list messages="vm.messages" header="\'Message L-DR\'"></message-list>',
        defaultData = [
            {
                id: 0,
                text: 'Hi, Loretta Fitzgerald'
            }
        ],
        expectedEmptyDataDirectiveOutput = '<h2 class="ng-binding">Message L-DR</h2><ul>    <!-- ngRepeat: message in vm.messages --></ul>',
        expectedInvalidDirectiveOutput = '<h2 class="ng-binding"></h2><ul>    <!-- ngRepeat: message in vm.messages --></ul>'


    beforeEach(angular.mock.module('espackApp'));

    beforeEach(()=> {
        _inject();
    });

    describe('when created', function () {
        it('should throw error when ngModel attribute not defined', function () {
            //expect(()=> {
            element = createDirective(null, '<message-list></message-list>');
            var expected = element.html().replace(/(\r|\n)/g, '');
            expect(expected).toBe(expectedInvalidDirectiveOutput);
            //}).toThrow();
        });

        it('should render the expected output', function () {
            element = createDirective();
            var expected = element.html().replace(/(\r|\n)/g, '');
            expect(expected).toBe(expectedEmptyDataDirectiveOutput);
        });
    });

    describe('when the model changes', function () {
        // Add specs
    });

    describe('when destroyed', function () {
        // Add specs
    });


    function createDirective(data, template) {
        let elm;

        //setup scope state
        scope.data = data || defaultData;

        //create directive
        elm = compile(template || validTemplate)(scope);

        //trigger watchers
        //scope.$apply();
        scope.$digest();
        return elm;
    }

    function _inject() {
        inject(($rootScope, $compile)=> {
            scope = $rootScope.$new();
            compile = $compile;
            rootScope = $rootScope;
        });
    }
});