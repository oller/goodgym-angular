'use strict';

angular.module('angularGoodgymApp')
  .service('AuthService', function Auth() {
    // AngularJS will instantiate a singleton by calling "new" on this function

	var sdo = {
			isLogged: false,
			token: ''
		};

	return sdo;
 
});