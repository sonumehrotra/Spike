
angular.module('getModule',[])
  .component('getDirective',{
      templateUrl : "app/components/getComponent/getComponent.html",
      controller: 'getModuleCtrl'
  })
  .controller('getModuleCtrl',['$scope','$http','myGetService',function($scope,$http,myGetService){
    $scope.msg = "This is GET component."
    $scope.url = "";
    $scope.response;
    $scope.sendRequest = function(){
      myGetService.getUserData($scope.url).then(function(myReponseData) {
        $scope.response = myReponseData
      },function(err){
        $scope.response = "Something went wrong, try again";
      });
    }
  }])
  .factory('myGetService',function($http,$q){
    var service = this;
    service.getUserData = function(url){
      var deferred = $q.defer();
      $http.get(url)
      .then(function(data){
        deferred.resolve(data);
      },function(err){
        deferred.reject(err);
      });
      return deferred.promise;
    };
    return service;
  })
