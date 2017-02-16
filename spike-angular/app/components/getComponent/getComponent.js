
angular.module('getModule',[])
  .directive('getDivective',function(){
    return {
      templateUrl : "app/components/getComponent/getComponent.html"
    }
  })
  .controller('getModuleCtrl',['$scope',function($scope){
    $scope.msg = "This is GET component."
  }])
