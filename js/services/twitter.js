(function() {

  'use strict';

  angular
    .module('myApp.services.twitter', [])
    .service('twitter', twitter);

  twitter.$inject = ['$http'];

  function twitter($http) {
    /*jshint validthis: true */
    var vm = this;
    vm.getComment = (username => {
      return $http.get(`https://impersonator.herokuapp.com/twitter/${username}`);
    });
  }

})();
