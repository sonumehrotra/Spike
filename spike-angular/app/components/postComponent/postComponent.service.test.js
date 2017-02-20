describe('Post service',function(){
  var httpBackend,
  myPostService


  beforeEach(module('postModule'));

  beforeEach(inject(function(_$httpBackend_, _myPostService_) {
    httpBackend = _$httpBackend_;
    myPostService = _myPostService_;
  }));

  afterEach(function () {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
  });

  it('Post component services', function(){
    var returnData = {data: "Response text"};
    var url = "http://localhost:9000/Post"
    httpBackend.expectPOST(url).respond(returnData);

    var returnedPromise = myPostService.postUserData(url);

    var result;
    returnedPromise.then(function (response) {
        result = response.data;
    });

    httpBackend.flush();

    expect(result).toEqual(returnData);

  })

})
