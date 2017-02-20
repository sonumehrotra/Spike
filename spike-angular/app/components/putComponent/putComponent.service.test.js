describe('Put service',function(){
  var httpBackend,
  myPutService


  beforeEach(module('putModule'));

  beforeEach(inject(function(_$httpBackend_, _myPutService_) {
    httpBackend = _$httpBackend_;
    myPutService = _myPutService_;
  }));

  afterEach(function () {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
  });

  it('Put component services', function(){
    var returnData = {data: "Response text"};
    var url = "http://localhost:9000/Put"
    httpBackend.expectPUT(url).respond(returnData);

    var returnedPromise = myPutService.putUserData(url);

    var result;
    returnedPromise.then(function (response) {
        result = response.data;
    });

    httpBackend.flush();

    expect(result).toEqual(returnData);

  })

})
