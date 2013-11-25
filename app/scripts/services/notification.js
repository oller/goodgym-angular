'use strict';

angular.module('angularGoodgymApp')
  .service('NotificationService', function() {

    // Set up Initialised Defaults
    var feedbackObj = {};

    return {
      getNotice: function() {
        return feedbackObj;
      },
      setNotice: function(feedback) {
        feedbackObj = feedback;
      },
      hideNotice: function () {
          return true;
      },
      destroyNotice: function() {
        feedbackObj = {};
      }
    };


  });
