(function() {
  'use strict';

  angular
    .module('angular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, ngRestProvider) {
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
      .state('node', ngRestProvider.set({
        url: '/project/:projectId/:nodeId',
        parent: 'master',
      }))
      .state('authorize', {
        url: '/authorize?code',
        controller: 'authorizeController',
        controllerAs: 'authorize'
      });
    $urlRouterProvider.otherwise('/');
  }
})();
