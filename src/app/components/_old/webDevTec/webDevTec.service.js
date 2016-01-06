(function() {
  'use strict';

  angular
      .module('angular')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
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

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
