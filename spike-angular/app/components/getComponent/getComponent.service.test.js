describe('GET service',function(){
  var httpBackend,
  myGetService


  beforeEach(module('getModule'));

  beforeEach(inject(function(_$httpBackend_, _myGetService_) {
    httpBackend = _$httpBackend_;
    myGetService = _myGetService_;
  }));

  afterEach(function () {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
  });

  it('GET component services', function(){
    var returnData = {data: "Response text"};
    var url = "http://localhost:9000/get"
    httpBackend.expectGET(url).respond(returnData);

    var returnedPromise = myGetService.getUserData(url);

    var result;
    returnedPromise.then(function (response) {
        result = response.data;
    });

    httpBackend.flush();

    expect(result).toEqual(returnData);

  })

})
