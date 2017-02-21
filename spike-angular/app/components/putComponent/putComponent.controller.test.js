describe('PUT Component ', function() {

  beforeEach(module('putModule'));

  var controller,
  myPutService,
  deferred,
  scope;

  beforeEach(inject(function($q, _myPutService_) {
    deferred = $q.defer();
    myPutService = _myPutService_;
    //spyOn(myService, 'getUserData').and.callThrough();

  }));

  beforeEach(inject(function(_$rootScope_,_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    rootScope = _$rootScope_;
    controller = _$controller_;
    scope = rootScope.$new();
    controller = controller('putModuleCtrl',{
      $scope : scope,
      myPutService : myPutService
    })

  }));

  it('Controller should be defined',function(){
    expect(controller).toBeDefined();
  })

  it("should send response",function(){
    spyOn(myPutService, 'putUserData').and.returnValue(deferred.promise);
    var expected = {'data':{'email':"pushpendu@gmail.com"}};
    scope.sendRequest(scope.url);
    deferred.resolve(expected);
    scope.$apply();
    expect(scope.response).toBe(expected.data);
  })

  it("should show error text when error occurs at server",function(){
    spyOn(myPutService, 'putUserData').and.returnValue(deferred.promise);
    var expected = "Something went wrong, try again";
    scope.sendRequest(scope.url);
    deferred.reject(expected);
    scope.$apply();
    expect(scope.response).toBe(expected);
  })
});
