(function() {
  'use strict';

  angular
    .module('angular')
    .directive('property', propertyDirective);

  /** @ngInject */
  function propertyDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/resources/property/property.html',
      scope: {
          creationDate: '='
      },
      controller: ['Component', property],
      controllerAs: 'bd',
      bindToController: true
    };

    return directive;
  }

  /** @ngInject */
  function property(Component) {
    Component.call(this);
  }
})();
