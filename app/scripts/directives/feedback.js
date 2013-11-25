'use strict';

angular.module('angularGoodgymApp')
  .directive('feedback', function(NotificationService, $timeout) {
    return {
      restrict: 'E',
      templateUrl: '/views/partials/feedback.html',

      link: function($scope, element, attrs) {

        // Hide Feedback until required
        $scope.hideFeedback = NotificationService.hideNotice();

        $scope.$watch(function() {
          return NotificationService.getNotice();
        }, function() {
          $scope.feedback = NotificationService.getNotice();
        }, true);


      }

    };
  });
