(function() {
  'use strict';

  angular
    .module('angular')
    .directive('headerNavbar', headerNavbar);

  /** @ngInject */
  function headerNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      // var vm = this;
    }
  }

})();
