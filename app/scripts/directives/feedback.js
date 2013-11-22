'use strict';

angular.module('angularGoodgymApp')
  .directive('feedback', function(NotificationService) {
    return {
      restrict: 'E',
      templateUrl: '/views/partials/feedback.html',

      link: function($scope) {

        // Hide Feedback until required
        $scope.hideFeedback = true;

        $scope.$watch(function() {
          return NotificationService.getFeedback();
        }, function() {
          $scope.feedback = NotificationService.getFeedback();
        }, true);

      }

    };
  });
