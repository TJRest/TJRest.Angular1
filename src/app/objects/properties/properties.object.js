(function() {
  'use strict';

  angular
    .module('angular')
    .factory('propertiesObject', propertiesObject);

  /** @ngInject */
  function propertiesObject() {
    function projeto(){
      this.account = null;
      this.accountreport = null;
      this.auxdir = null;
      this.balance = null;
      this.copyright = null;
      this.export = null;
      this.flags = null;
      this.icalreport = null;
      this.include = null;
      this.leaves = null;
      this.limits = null;
      this.macro = null;
      this.navigator = null;
      this.nikureport = null;
      this.projectid = null;
      this.projectids = null;
      this.rate = null;
      this.resource = null;
      this.resourcereport = null;
      this.shift = null;
      this.statussheet = null;
      this.statussheetreport = null;
      this.supplement = null;
      this.tagfile = null;
      this.task = null;
      this.taskreport = null;
      this.textreport = null;
      this.timesheet = null;
      this.timesheetreport = null;
      this.tracereport = null;
      this.vacation = null;
    }
    return projeto;

  }
})();
