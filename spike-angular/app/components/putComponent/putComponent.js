
angular.module('putModule',[])
  .component('putDirective',{
      templateUrl : "app/components/putComponent/putComponent.html",
      controller: 'putModuleCtrl'
  })
  .controller('putModuleCtrl',['$scope','$http','myPutService',function($scope,$http,myPutService){
    $scope.msg = "This is PUT component."
    $scope.url = "";
    $scope.response;
    $scope.sendRequest = function(){
      var config = {headers: {
            'Authorization': 'Basic c2NhbGF0cmE6c2NhbGF0cmE='
        }
      };
      myPutService.putUserData($scope.url,config).then(function(myReponseData) {
        $scope.response = myReponseData.data
      },function(err){
        $scope.response = "Something went wrong, try again";
      });
    }
  }])
  .factory('myPutService',function($http,$q){
    var service = this;
    service.putUserData = function(url, config){
      var deferred = $q.defer();
      $http.put(url,{},config)
      .then(function(data){
        deferred.resolve(data);
      },function(err){
        deferred.reject(err);
      });
      return deferred.promise;
    };
    return service;
  })
