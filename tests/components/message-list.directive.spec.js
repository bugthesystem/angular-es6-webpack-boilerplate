describe('MessageListDirective', ()=> {

    let element, scope, compile, rootScope,
        validTemplate = '<message-list messages="vm.messages" header="\'Message List\'"></message-list>',
        defaultData = [
            {
                id: 0,
                text: 'Hi, Loretta Fitzgerald'
            }
        ];

    beforeEach(angular.mock.module('espackApp'));

    beforeEach(()=> {
        _inject();
    });

    describe('when created', function () {
        it('should not render list when messages property is empty', function () {
            element = createDirective(null, '<message-list></message-list>');
            var expected = element.find('li').size();
            expect(expected).toBe(0);
        });

        it('should render the expected output', function () {
            element = createDirective();
            var expected = element.find('li').first().text().trim();
            expect(expected).toBe(defaultData[0].text);
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
        scope.vm = {messages: data || defaultData};

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