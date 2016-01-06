(function() {
  'use strict';

  angular
    .module('angular')
    .factory('authorizeService', authorizeService);

  /** @ngInject */
  function authorizeService($log, $http) {
    var apiHost = 'login/oauth/access_token';
    var dataRequest = {
      'client_id' : '2cbbda3894ce8d4ba694',
      'client_secret' : 'ca0b39ae00c8d4bd0bb6b72c3cf15e91db295e6f',
      'code' : null
    };

    var service = {
      'apiHost': apiHost,
      'dataRequest': dataRequest,
      'getContributors': getContributors
    };
    return service;

    function getContributors(code) {
      return $http.post(apiHost, dataRequest, {'headers': {'Accept': 'application/json'}})
        .then(getContributorsComplete)
        .catch(getContributorsFailed);

      function getContributorsComplete(response) {
        return response.data;
      }

      function getContributorsFailed(error) {
        $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      }
    }
  }
})();
