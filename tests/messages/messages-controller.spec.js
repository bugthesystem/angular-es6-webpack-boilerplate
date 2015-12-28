describe('MessagesController', ()=> {

    let homeCtrl, mock, deferredResolution, rootScope, controllerFactory,
        mockData = [
            {
                id: 0,
                text: 'Hi, Loretta Fitzgerald'
            }
        ];

    beforeEach(angular.mock.module('espackApp'));

    describe('#construct', ()=> {

        beforeEach(()=> {
            _inject();
        });

        it('should exist', ()=> {
            homeCtrl = controllerFactory('MessagesController', mock);
            expect(!!homeCtrl).toBe(true);
        });

        it('should define a messages Array property', () => {
            homeCtrl = controllerFactory('MessagesController', mock);
            expect(homeCtrl.messages instanceof Array).toBe(true);
        });
    });

    describe('#init', ()=> {

        beforeEach(()=> {
            _inject();
        });

        it('should be defined', ()=> {
            homeCtrl = controllerFactory('MessagesController', mock);
            expect(typeof homeCtrl.init).toBe('function');
        });

        it('should set messages property', () => {
            //given
            spyOn(mock.messageService, 'findAll').and.returnValue(deferredResolution.promise);

            //when
            deferredResolution.resolve(mockData);
            homeCtrl = controllerFactory('MessagesController', mock);
            rootScope.$digest();

            //then
            expect(homeCtrl.messages.map(item=> item.text)).toEqual(mockData.map(item=> item.text));
            expect(mock.messageService.findAll).toHaveBeenCalled();
        });
    });

    describe('#loadMessages', ()=> {

        beforeEach(()=> {
            _inject();
        });

        it('should set messages property', () => {
            spyOn(mock.messageService, 'findAll').and.returnValue(deferredResolution.promise);
            homeCtrl = controllerFactory('MessagesController', mock);
            homeCtrl.init = ()=> {
            };//skip initialization because of testing loadMessages

            homeCtrl.loadMessages();
            deferredResolution.resolve(mockData);
            rootScope.$digest();

            expect(homeCtrl.messages.map(item=> item.text)).toEqual(mockData.map(item => item.text));
            expect(mock.messageService.findAll).toHaveBeenCalled();
        });

    });

    function _inject() {
        inject(($controller, $rootScope, messageService, logger, $q) => {
            rootScope = $rootScope;
            controllerFactory = $controller;
            deferredResolution = $q.defer();
            mock = {
                $scope: $rootScope.$new(),
                logger,
                messageService
            };
        });
    }
});