'use strict';

angular.module('goodgymApp')
  .factory('AuthService', function($http, $cookieStore, toaster) {

    var accessLevels = routingConfig.accessLevels;
    var userRoles = routingConfig.userRoles;
    var currentUser = $cookieStore.get('user') || {
      username: '',
      role: userRoles.public
    };

    // GG API Vars
    var token;
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
      $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      console.log('token is set to ' + token);
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

        $http.post(urlApiRegister, user).success(function(user) {
          toaster.pop('success', 'Register Success', 'You\'ve registered, nice one!');
          setToken(user.access_token);
          changeUser(user.scope);
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
          function match_scope_to_role(scope) {
            if (user.scope == "user") {
              currentUser.role = userRoles.user;
            } else if (user.scope == "admin") {
              currentUser.role = userRoles.admin;
            }
          }
          console.log('Login success');
          toaster.pop('success', 'Logged In', 'Now, book that next run!');
          setToken(user.access_token);
          match_scope_to_role(user.scope);
          changeUser(user.scope);
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
      getToken: function() {
        return token;
      },

      accessLevels: accessLevels,
      userRoles: userRoles,
      user: currentUser
    };
  });
