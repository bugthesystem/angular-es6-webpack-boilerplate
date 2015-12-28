describe('MessageService', ()=> {

    let messageSvc, httpBackend, loggerMock,
        mockData = [
            {
                id: 0,
                text: 'Hi, Loretta Fitzgerald'
            }
        ],
        mockErrorData = {'msg': 'An error occurred'};

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
            expect(!!messageSvc).toBe(true);
        });

    });

    describe('#findAll', ()=> {

        beforeEach(()=> {
            _inject();
        });

        it('should be defined', ()=> {
            expect(typeof messageSvc.findAll).toBe('function');
        });

        it('should make  $http call', ()=> {

            let expectedData;

            //given
            httpBackend.whenGET('http://localhost:3000/messages').respond(200, mockData);

            //when
            messageSvc.findAll().then((data, status, headers, config)=> {
                expectedData = data;
            });

            httpBackend.flush();

            //then
            expect(expectedData.map((elm)=> elm.text)).toEqual(mockData.map((elm)=> elm.text));
        });

        it('should handle when $http call failed', ()=> {

            let expectedData, expectedMessage = 'XHR Failed for MessageService#findAll.' + mockErrorData;

            //given
            spyOn(loggerMock, 'error').and.callThrough();
            httpBackend.whenGET('http://localhost:3000/messages').respond(400, mockErrorData);

            //when
            messageSvc.findAll().then(()=> {
            }, (reason)=> {
                expectedData = reason;
            });

            httpBackend.flush();

            //then
            expect(expectedData.msg).toEqual(mockErrorData.msg);
            expect(loggerMock.error).toHaveBeenCalledWith(expectedMessage);
        });

    });

    describe('#find', ()=> {

        beforeEach(()=> {
            _inject();
        });

        it('should be defined', ()=> {
            expect(typeof messageSvc.find).toBe('function');
        });

        it('should make  $http call', ()=> {

            let expectedData, mockId = 1;

            //given
            httpBackend.whenGET(`http://localhost:3000/messages/${mockId}`).respond(200, mockData[0]);

            //when
            messageSvc.find(mockId).then((data, status, headers, config)=> {
                expectedData = data;
            });

            httpBackend.flush();

            //then
            expect(expectedData.text).toEqual(mockData[0].text);
        });

        it('should handle when $http call failed', ()=> {

            let expectedData,
                expectedMessage = 'XHR Failed for MessageService#find.' + mockErrorData,
                mockId = 1;

            //given
            spyOn(loggerMock, 'error').and.callThrough();
            httpBackend.whenGET(`http://localhost:3000/messages/${mockId}`).respond(400, mockErrorData);

            //when
            messageSvc.find(mockId).then(()=> {
            }, (reason)=> {
                expectedData = reason;
            });

            httpBackend.flush();

            //then
            expect(expectedData.msg).toEqual(mockErrorData.msg);
            expect(loggerMock.error).toHaveBeenCalledWith(expectedMessage);
        });
    });

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    function _inject() {
        inject((messageService, $httpBackend, logger)=> {

            messageSvc = messageService;
            httpBackend = $httpBackend;
            loggerMock = logger;

        });
    }
});