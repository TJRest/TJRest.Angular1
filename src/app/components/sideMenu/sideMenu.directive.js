(function() {
  'use strict';

  angular
    .module('angular')
    .directive('sideMenu', [sideMenu]);

  /** @ngInject */
  function sideMenu () {

      var directive = {
          restrict: 'E',
          transclude: true,
          // scope: {
          //     title: '=',
          //     number : '=',
          //     opened: '=',
          //     disabled: '='
          // },
          templateUrl: 'app/components/sideMenu/sideMenu.html',
          controller: 'sideMenuController',
          controllerAs: 'sm'
      };

      return directive;
  }
})();
