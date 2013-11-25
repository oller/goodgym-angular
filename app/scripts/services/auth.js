'use strict';

angular.module('angularGoodgymApp')
  .service('AuthService', function Auth() {

    // Set up Initialised Defaults
    var isLoggedIn = false,
        token = '',
        clientId = '0253c003d6cf3ad1a37d71510632c9a88ba22cfdd7a0d21b6b772561cd515884',
        clientSecret = '4d90135d4a7177a8f712f4f6ab2434b91842817ca0759074469b93dacd3d412e';

    return {
      getLoggedIn: function() {
        return isLoggedIn;
      },
      setLoggedIn: function(loggedInStatus) {
        isLoggedIn = loggedInStatus;
      },
      getToken: function() {
        return token;
      },
      setToken: function(userSessionToken) {
        token = userSessionToken;
      },
      getClientId: function() {
        return clientId;
      },
      setClientId: function(applicationId) {
        clientId = applicationId;
      },
      getClientSecret: function() {
        return clientSecret;
      },
      setClientSecret: function(applicationSecretId) {
        clientSecret = applicationSecretId;
      }
    };

  });
