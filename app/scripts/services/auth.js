'use strict';

angular.module('angularGoodgymApp')
  .service('AuthService', function Auth() {
    // AngularJS will instantiate a singleton by calling "new" on this function

	var AuthServiceDo = {
			isLogged: false,
			token: '',
			clientId: '0253c003d6cf3ad1a37d71510632c9a88ba22cfdd7a0d21b6b772561cd515884'
		};

	return AuthServiceDo;
 
});