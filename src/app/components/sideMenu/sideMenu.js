(function() {
  'use strict';

  angular
    .module('angular')
    .controller('sideMenuController', sideMenuController);

  /** @ngInject */
  function sideMenuController($mdSidenav) {
    var vm = this;
    vm.openMenu = function(){
      $mdSidenav('left').toggle();
    }
  }
})();
