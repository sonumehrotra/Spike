var angular = require('angular');
require('../bower_components/angular-ui-router/release/angular-ui-router.js');
require('./components/getComponent/getComponent');
require('./components/postComponent/postComponent');
require('./components/putComponent/putComponent');
require('./components/deleteComponent/deleteComponent');


var app = angular.module("spike",['ui.router','getModule','postModule','putModule','deleteModule']);

app.controller('spikeCtrl',['$scope',function($scope){
  $scope.msg = "This is angularJS."
}]);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/get');

  $stateProvider
    .state('get', {
            url: '/get',
            template: '<get-directive></get-directive>',
            controller: 'getModuleCtrl',
    })
    .state('post',{
      url: '/post',
            template: '<post-directive></post-directive>',
            controller : 'postModuleCtrl'
    })
    .state('put',{
      url: '/put',
            template: '<put-directive></put-directive>',
            controller : 'putModuleCtrl'
    })
    .state('delete',{
      url: '/delete',
            template: '<delete-directive></delete-directive>',
            controller : 'deleteModuleCtrl'
    })
});
