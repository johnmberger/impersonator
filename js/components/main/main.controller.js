(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController)
    .directive('loading', ['$http', function ($http) {
      return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          scope.isLoading = function () {
            return $http.pendingRequests.length > 0;
          };
          scope.$watch(scope.isLoading, function (value) {
            if (value) {
              element.removeClass('ng-hide');
            } else {
              element.addClass('ng-hide');
            }
          });
        }
      };
    }]);

  mainController.$inject = ['reddit'];

  function mainController(reddit) {
    /*jshint validthis: true */
    var vm = this;

    vm.redditUsername = '';
    vm.sentence = '';
    vm.showComment = false;

    vm.getSentence = (redditUsername) => {
      vm.showComment = false;
      reddit.getComment(redditUsername)
      .then(response => {
        if (response.data.error) {
          vm.error = 'username not found! Try again.';
        } else {
          vm.showComment = true;
          vm.sentence = response.data.generated_sentence;
        }
      });
    };
  }

})();
