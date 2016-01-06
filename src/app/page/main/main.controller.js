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
        'title': 'Project 1',
        'author': 'John Doe',
        'url' : '/#/project/1'
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
      },
      {
        'title': 'Project 2',
        'author' : 'Joe Soap',
        'url' : '/#/project/2'
      }
    ];
  }
})();
