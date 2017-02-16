var angular = require('angular');
require('../bower_components/angular-ui-router/release/angular-ui-router.js');
require('./components/getComponent/getComponent');


var app = angular.module("spike",['ui.router','getModule']);

app.controller('spikeCtrl',['$scope',function($scope){
  $scope.msg = "This is angularJS."
}]);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/get');

  $stateProvider
    .state('home', {
            url: '/get',
            template: '<get-divective></get-divective>',
            controller: 'getModuleCtrl',
    })
    // .state('cart',{
    //   url: '/cart',
    //   templateUrl: 'app/components/shoppingCart/shoppingCart.html',
    //   controller : 'shoppingCartCtrl'
    // })
});
