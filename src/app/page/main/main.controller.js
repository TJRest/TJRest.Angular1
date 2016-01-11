(function() {
  'use strict';

  angular
    .module('angular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr) {
    var vm = this;

    vm.projects = [
      {
        'title': 'Project 1 1231 23123 12 312 312',
        'author': 'John Doe',
        'url' : '/#/project/1'
      },
      {
        'title': 'Project 2232323',
        'author' : 'Joe Soap',
        'url' : '/#/project/2'
      },
      {
        'title': 'Project 2',
        'author' : 'Joe Soap',
        'url' : '/#/project/2'
      },
      {
        'title': 'Project 2123123123123',
        'author' : 'Joe Soap',
        'url' : '/#/project/2'
      },
      {
        'title': 'Project 2',
        'author' : 'Joe Soap',
        'url' : '/#/project/2'
      },
      {
        'title': 'Project 2',
        'author' : 'Joe Soap',
        'url' : '/#/project/2'
      }
    ];
  }
})();
