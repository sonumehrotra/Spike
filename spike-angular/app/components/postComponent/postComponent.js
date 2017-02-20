
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
      myPostService.postUserData($scope.url).then(function(myReponseData) {
        $scope.response = myReponseData
      },function(err){
        $scope.response = "Something went wrong, try again";
      });
    };
  }])
  .factory('myPostService',function($http,$q){
    var service = this;
    service.postUserData = function(url){
      var deferred = $q.defer();
      $http.post(url)
      .then(function(data){
        deferred.resolve(data);
      },function(err){
        deferred.reject(err);
      });
      return deferred.promise;
    };
    return service;
  })
