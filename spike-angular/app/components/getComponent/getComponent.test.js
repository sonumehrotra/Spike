describe('sorting the list of users', function() {

  beforeEach(module('spike'));

  var $controller,
  $httpBackend,
  $myService,
  $deferred;

  beforeEach(inject(function(_$rootScope_,_$controller_,_myService_,_$q_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $rootScope = _$rootScope_;
    $myService = _myService_;
    $controller = _$controller_;
    $deferred = _$q_.defer();
  }));

  it('Controller should be defined',function(){
    var $scope = {};
		var controller = $controller('getModuleCtrl', { $scope: $scope });
    expect(controller).toBeDefined();
  })

  it("should send request for data",function(){
    mock = {
        $scope: $rootScope.$new(),
        myService: $myService
    };
    var expected = {'data':{'email':"pushpendu@gmail.com"}};
    var controller = $controller('getModuleCtrl', mock);

    spyOn(mock.myService,'getUserData').and.returnValue($deferred.promise);

    mock.$scope.sendRequest(mock.$scope.url);
    $deferred.resolve(expected);
    mock.$scope.$apply();
    expect(mock.$scope.response).toBe(expected);
  })
});
