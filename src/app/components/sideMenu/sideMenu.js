(function() {
  'use strict';

  angular
    .module('angular')
    .controller('sideMenuController', sideMenuController);

  /** @ngInject */
  function sideMenuController($mdSidenav) {
    var vm = this;
    console.log('aaa');
    vm.openMenu = function(){
      $mdSidenav('left').toggle();
    }
  }
})();
