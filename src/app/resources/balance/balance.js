(function() {
  'use strict';

  angular
    .module('angular')
    .directive('balance', balanceDirective)
    .factory('balanceObj', balanceFact);

  /** @ngInject */
  function balanceDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/resources/balance/balance.html',
      scope: {
          ngRestId: '='
      },
      controller: balance,
      controllerAs: 'bd',
      bindToController: true
    };

    return directive;
  }
  
  /** @ngInject */
  function balance($scope, ngRest, balanceObj) {
    var vm = this;
    vm.balance = ngRest.instance(balanceObj, vm.ngRestId);
  }

  function balanceFact(){
    return function(){
      
    }
  }
})();
