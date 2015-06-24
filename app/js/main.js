;(function () {

  'use strict';

  angular.module('LikeModule', [])

  .controller('LikeController', ['$scope',
    function($scope) {

      $scope.numOfLikes = 0;

      $scope.count = function(increment) {
        $scope.numOfLikes += increment;
      };

      $scope.click = function() {
        if ($scope.numOfLikes === 1) {
          return 'like';
        } else {
          return 'likes';
        }
      };
    }

  ]);

}());
