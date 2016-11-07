(function() {

  'use strict';

  angular
    .module('myApp.services.reddit', [])
    .service('reddit', reddit);

  reddit.$inject = ['$http'];

  function reddit($http) {
    /*jshint validthis: true */
    var vm = this;

    vm.test = 'REDDIT!';
    vm.getComments = (username => {
      return $http.get(`https://impersonator.herokuapp.com/reddit/${username}`);
    });
  }

})();
