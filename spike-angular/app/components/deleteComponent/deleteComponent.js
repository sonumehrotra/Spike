
angular.module('deleteModule',[])
  .component('deleteDirective',{
      templateUrl : "app/components/deleteComponent/deleteComponent.html",
      controller: 'deleteModuleCtrl'
  })
  .controller('deleteModuleCtrl',['$scope','$http','myDeleteService',function($scope,$http,myDeleteService){
    $scope.msg = "This is delete component."
    $scope.url = "";
    $scope.response;
    $scope.sendRequest = function(){
      var config = {headers: {
            'Authorization': 'Basic c2NhbGF0cmE6c2NhbGF0cmE='
        }
      };
      myDeleteService.deleteUserData($scope.url,config).then(function(myReponseData) {
        $scope.response = myReponseData.data
      },function(err){
        $scope.response = "Something went wrong, try again";
      });
    }
  }])
  .factory('myDeleteService',function($http,$q){
    var service = this;
    service.deleteUserData = function(url,config){
      var deferred = $q.defer();
      $http.delete(url,config)
      .then(function(data){
        deferred.resolve(data);
      },function(err){
        deferred.reject(err);
      });
      return deferred.promise;
    };
    return service;
  })
