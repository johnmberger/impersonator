// sample angular code

(function() {

  'use strict';

  angular
    .module('myApp', [
      'myApp.services.reddit',
      'myApp.services.twitter',
      'myApp.config',
      'myApp.components.main'
    ]);

})();
