(function() {
  'use strict';

  angular
    .module('angular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('master', {
        abstract: true,
        views: {
          layout: {
            templateUrl: 'app/page/index.html',
            controller: 'indexController',
            controllerAs: 'index',
          }
        }
      })
      .state('home', {
        url: '/',
        templateUrl: 'app/page/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        parent: 'master'
      })
      .state('project', {
        url: '/project/:projectId',
        templateUrl: 'app/page/project/project.html',
        controller: 'projectController',
        controllerAs: 'project',
        parent: 'master'
      })
      .state('node', {
        url: '/project/:projectId/:nodeId',
        templateProvider: template,
        controllerProvider: controller,
        'resolve': {
          'projectNode': projectNode
        },
        controllerAs: 'node',
        parent: 'master'
      })
      .state('authorize', {
        url: '/authorize?code',
        controller: 'authorizeController',
        controllerAs: 'authorize'
      });
    $urlRouterProvider.otherwise('/');
  }

  function template(projectNode, $http){
    return $http({method: 'GET', url: '/app/resources/' + projectNode.type + '/' + projectNode.type + '.html'})
     .then (function (result) {
        return '<side-menu></side-menu>' + result.data;
    }, function(){
      console.error('error');
    });
  }

  function controller(projectNode){
    return projectNode.type;
  }

  function projectNode($http) {
    return $http({method: 'GET', url: '/data/propertySchema.json'})
     .then (function (result) {
        return result.data;
    }, function(){
      console.error('error');
    });
  }

})();
