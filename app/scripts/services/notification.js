'use strict';

angular.module('angularGoodgymApp')
  .service('NotificationService', function Notification() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var feedback = {
		class: '',
		title: '',
		message: '',
		icon: ''
    };

    console.log('From Service:');
    console.log(feedback);

    return feedback;
  });
