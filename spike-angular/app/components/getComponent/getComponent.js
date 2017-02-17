
angular.module('getModule',[])
  .directive('getDirective',function(){
    return {
      templateUrl : "app/components/getComponent/getComponent.html"
    }
  })
  .controller('getModuleCtrl',['$scope','$http','myService',function($scope,$http,myService){
    $scope.msg = "This is GET component."
    $scope.url = ""; 
    $scope.response;
    $scope.sendRequest = function(){
      myService.getUserData($scope.url).then(function(myReponseData) {
        $scope.response = myReponseData
      });
    }
  }])
  .factory('myService',function($http,$q){
    var service = this;
    service.getUserData = function(url){
      var deferred = $q.defer();
      $http.get(url)
      .then(function(data){
        deferred.resolve(data);
      });
      return deferred.promise;
    };
    return service;
  })
