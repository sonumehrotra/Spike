
angular.module('postModule',[])
  .component('postDirective',{
      templateUrl : "app/components/postComponent/postComponent.html",
      controller : 'postModuleCtrl'
  })
  .controller('postModuleCtrl',['$scope','$http','myPostService',function($scope,$http,myPostService){
    $scope.msg = "This is POST component.";
    $scope.url = "http://localhost:8080/post";
    $scope.response;
    $scope.sendRequest = function(){
      var config = {headers: {
            'Authorization': 'Basic c2NhbGF0cmE6c2NhbGF0cmE='
        }
      };
      myPostService.postUserData($scope.url,config)
      .then(function(myReponseData) {
        $scope.response = myReponseData.data
      },function(err){
        $scope.response = "Something went wrong, try again";
      });
    };
  }])
  .factory('myPostService',function($http,$q){
    var service = this;
    service.postUserData = function(url,config){
      var deferred = $q.defer();
      $http.post(url,{},config)
      .then(function(data){
        deferred.resolve(data);
      },function(err){
        deferred.reject(err);
      });
      return deferred.promise;
    };
    return service;
  })
