(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['reddit'];

  function mainController(reddit) {
    /*jshint validthis: true */
    this.greeting = 'Hello World!';
    this.test = reddit.test;
    this.redditUsername = '';
    this.sentence = '';
    this.getSentence = (redditUsername) => {
      this.sentence = 'working....';
      reddit.getComments(redditUsername)
      .then(response => {
        if (response.data.error) {
          this.sentence = 'username not found! Try again.';
        } else {
          this.sentence = response.data.generated_sentence;
        }
      });
    };
  }

})();
