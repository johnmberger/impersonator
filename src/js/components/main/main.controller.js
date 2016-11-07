(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['reddit'];

  function mainController(reddit) {
    /*jshint validthis: true */
    var vm = this;

    vm.greeting = 'Hello World!';
    vm.test = reddit.test;
    vm.redditUsername = '';
    vm.sentence = '';

    vm.getSentence = (redditUsername) => {
      vm.sentence = 'working....';
      reddit.getComments(redditUsername)
      .then(response => {
        if (response.data.error) {
          vm.sentence = 'username not found! Try again.';
        } else {
          vm.sentence = response.data.generated_sentence;
        }
      });
    };
  }

})();
