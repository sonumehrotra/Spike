
angular.module('getModule',[])
  .directive('getDirective',function(){
    return {
      templateUrl : "app/components/getComponent/getComponent.html"
    }
  })
  .controller('getModuleCtrl',['$scope','$http',function($scope,$http){
    $scope.msg = "This is GET component."
    $scope.url = "http://localhost:8080/get"
    $scope.response;
    $scope.sendRequest = function(){
      $http({
        method: 'GET',
        url: $scope.url
      }).then(function(response){
        $scope.response = response.data;
      })
    }
  }])
