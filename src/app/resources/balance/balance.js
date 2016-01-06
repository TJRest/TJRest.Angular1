(function() {
  'use strict';

  angular
    .module('angular')
    .controller('balance', balance);

  /** @ngInject */
  function balance($mdSidenav) {
    var vm = this;
    vm.openMenu = function(){
      $mdSidenav('left').toggle();
    }
  }
})();
