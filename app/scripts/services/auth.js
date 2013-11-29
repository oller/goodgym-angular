'use strict';

angular.module('angularGoodgymApp')
// .service('AuthService', function Auth() {

//   // Set up Initialised Defaults
//   var isLoggedIn = false,
//       token = '',
//       clientId = '0253c003d6cf3ad1a37d71510632c9a88ba22cfdd7a0d21b6b772561cd515884',
//       clientSecret = '4d90135d4a7177a8f712f4f6ab2434b91842817ca0759074469b93dacd3d412e';

//   return {
//     getLoggedIn: function() {
//       return isLoggedIn;
//     },
//     setLoggedIn: function(loggedInStatus) {
//       isLoggedIn = loggedInStatus;
//     },
//     getToken: function() {
//       return token;
//     },
//     setToken: function(userSessionToken) {
//       token = userSessionToken;
//     },
//     getClientId: function() {
//       return clientId;
//     },
//     setClientId: function(applicationId) {
//       clientId = applicationId;
//     },
//     getClientSecret: function() {
//       return clientSecret;
//     },
//     setClientSecret: function(applicationSecretId) {
//       clientSecret = applicationSecretId;
//     }
//   };

// });

.factory('AuthService', function($http, $cookieStore, toaster) {

  toaster.pop('success', 'Register Success', 'You\'ve registered, nice one!');


  var accessLevels = routingConfig.accessLevels,
    userRoles = routingConfig.userRoles,
    currentUser = $cookieStore.get('user') || {
      username: '',
      role: userRoles.public
    };

  // GG API Vars
  var token = '';
  var clientId = '0253c003d6cf3ad1a37d71510632c9a88ba22cfdd7a0d21b6b772561cd515884';
  var clientSecret = '4d90135d4a7177a8f712f4f6ab2434b91842817ca0759074469b93dacd3d412e';
  var urlApiLogin = 'http://goodgym-api.herokuapp.com/oauth/token';
  var urlApiRegister = 'http://goodgym-api.herokuapp.com/api/v1/runners';
  var urlApiLogout = '';

  $cookieStore.remove('user');

  function changeUser(user) {
    _.extend(currentUser, user);
  };

  function setToken(userSessionToken) {
    token = userSessionToken;
  };

  return {
    authorize: function(accessLevel, role) {
      if (role === undefined)
        role = currentUser.role;

      return accessLevel.bitMask & role.bitMask;
    },
    isLoggedIn: function(user) {
      if (user === undefined)
        user = currentUser;
      return user.role.title === userRoles.user.title || user.role.title === userRoles.admin.title;
    },
    register: function(user, success, error) {
      // Additional vars for Register Query
      user.client_id = clientId;

      $http.post(urlApiRegister, user).success(function(res) {
        toaster.pop('success', 'Register Success', 'You\'ve registered, nice one!');
        setToken(user.token);
        changeUser(res);
        success();
      }).error(function(error) {
        toaster.pop('error', error.error, error.error_description);
      });
    },
    login: function(user, success, error) {
      // Additional vars for Login Query
      user.client_id = clientId;
      user.client_secret = clientSecret;
      user.grant_type = 'password',
      user.provider = 'identity';

      $http.post(urlApiLogin, user).success(function(user) {
        console.log('Login success');
        toaster.pop('success', 'Logged In', 'Now, book that next run!');
        setToken(user.token);
        changeUser(user);
        success(user);
      }).error(function(error) {
        toaster.pop('error', error.error, error.error_description);
      });
    },
    logout: function(success, error) {
      $http.post(urlApiLogout).success(function() {
        changeUser({
          username: '',
          role: userRoles.public
        });
        success();
      }).error(error);
    },

    accessLevels: accessLevels,
    userRoles: userRoles,
    user: currentUser
  };
});
