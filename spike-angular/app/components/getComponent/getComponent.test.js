describe('GET Component ', function() {

  beforeEach(module('getModule'));

  var controller,
  myGetService,
  deferred,
  scope;

  beforeEach(inject(function($q, _myGetService_) {
    deferred = $q.defer();
    myGetService = _myGetService_;
    //spyOn(myService, 'getUserData').and.callThrough();

  }));

  beforeEach(inject(function(_$rootScope_,_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    rootScope = _$rootScope_;
    controller = _$controller_;
    scope = rootScope.$new();
    controller = controller('getModuleCtrl',{
      $scope : scope,
      myGetService : myGetService
    })

  }));

  it('Controller should be defined',function(){
    expect(controller).toBeDefined();
  })

  it("should send response",function(){
    spyOn(myGetService, 'getUserData').and.returnValue(deferred.promise);
    var expected = {'data':{'email':"pushpendu@gmail.com"}};
    scope.sendRequest(scope.url);
    deferred.resolve(expected);
    scope.$apply();
    expect(scope.response).toBe(expected);
  })

  it("should show error text when error occurs at server",function(){
    spyOn(myGetService, 'getUserData').and.returnValue(deferred.promise);
    var expected = "Something went wrong, try again";
    scope.sendRequest(scope.url);
    deferred.reject(expected);
    scope.$apply();
    expect(scope.response).toBe(expected);
  })
});
