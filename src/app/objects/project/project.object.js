(function() {
  'use strict';

  angular
    .module('angular')
    .factory('projectObject', projectObject);

  /** @ngInject */
  function projectObject(propertiesObject) {
    function projeto(){
      this.nome           = null;
      this.timezone       = null;
      this.timeformat     = null;
      this.numberformat   = null;
      this.currencyformat = null;
      this.properties     = new propertiesObject();

      this.add = function(){
        console.log('adding new project... ', this);
      }
    }
    return projeto;

  }
})();
