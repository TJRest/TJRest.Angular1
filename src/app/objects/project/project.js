(function() {
  'use strict';

  angular
    .module('angular')
    .factory('project', project);

  /** @ngInject */
  function project(projectObject) {
    return new projectObject();
  }
})();
