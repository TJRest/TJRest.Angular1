(function() {
  'use strict';

  angular
    .module('angular')
    .controller('authorizeController', authorizeController);

  /** @ngInject */
  function authorizeController(authorizeService) {
    var vm = this;
    var key = window.location.search.split('=')[1];
    authorizeService.getContributors(key).then(function(data) {
      console.log(data);
    });

  }
})();
