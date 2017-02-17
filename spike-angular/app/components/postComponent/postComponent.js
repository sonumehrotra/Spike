
angular.module('postModule',[])
  .directive('postDirective',function(){
    return {
      templateUrl : "app/components/postComponent/postComponent.html"
    }
  })
  .controller('postModuleCtrl',['$scope','$http',function($scope,$http){
    $scope.msg = "This is POST component.";
    $scope.url = "http://localhost:8080/post";
    $scope.sendRequest = function(){
    };
  }])
