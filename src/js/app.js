// sample angular code

(function() {

  'use strict';

  angular
    .module('myApp', [
      'myApp.services.reddit',
      'myApp.config',
      'myApp.components.main'
    ]);

})();
