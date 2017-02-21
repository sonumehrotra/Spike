describe('Delete service',function(){
  var httpBackend,
  myDeleteService


  beforeEach(module('deleteModule'));

  beforeEach(inject(function(_$httpBackend_, _myDeleteService_) {
    httpBackend = _$httpBackend_;
    myDeleteService = _myDeleteService_;
  }));

  afterEach(function () {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
  });

  it('Delete component services', function(){
    var returnData = {data: "Response text"};
    var url = "http://localhost:9000/delete"
    httpBackend.expectDELETE(url).respond(returnData);

    var returnedPromise = myDeleteService.deleteUserData(url);

    var result;
    returnedPromise.then(function (response) {
        result = response.data;
    });

    httpBackend.flush();

    expect(result).toEqual(returnData);

  })

})
