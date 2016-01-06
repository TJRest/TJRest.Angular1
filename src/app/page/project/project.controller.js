(function() {
  'use strict';

  angular
    .module('angular')
    .controller('projectController', projectController);

  /** @ngInject */
  function projectController($mdSidenav) {
    var vm = this;
    vm.openMenu = function(){
      $mdSidenav('left').toggle()
    }
  }
})();
