'use strict';

angular.module('angularGoodgymApp')
  .service('NotificationService', function() {

    var feedbackObj = {};

    return {

      getFeedback: function() {
        return feedbackObj;
      },
      setFeedback: function(feedback) {
        feedbackObj = feedback;
      }
    };


  });