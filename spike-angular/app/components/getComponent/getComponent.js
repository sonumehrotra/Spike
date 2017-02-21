angular.module('getModule',[])
  .component('getDirective',{
      templateUrl : "app/components/getComponent/getComponent.html",
      controller: 'getModuleCtrl'
  })
  .controller('getModuleCtrl',['$scope','myGetService',function($scope,myGetService){
    $scope.msg = "This is GET component."
    $scope.url = "";
    $scope.response;
    $scope.sendRequest = function(){
      var config = {headers: {
            'Authorization': 'Basic c2NhbGF0cmE6c2NhbGF0cmE='
        }
      };
      myGetService.getUserData($scope.url,config).then(function(myReponseData) {
        $scope.response = myReponseData.data
      },function(err){
        $scope.response = "Something went wrong, try again";
      });
    }
  }])
  .factory('myGetService',function($http,$q){
    var service = this;
    service.getUserData = function(url,config){
      var deferred = $q.defer();
      $http.get(url,config)
      .then(function(data){
        deferred.resolve(data);
      },function(err){
        deferred.reject(err);
      });
      return deferred.promise;
    };
    return service;
  });
