'use strict';

angular.module('angularGoodgymApp')
  .controller('LoginCtrl', function($scope, $http, AuthService, NotificationService) {

    $scope.login = function() {
      console.log('logging in with user: ' + $scope.user.username + ' and password: ' + $scope.user.password);
      $scope.user.client_id = '0253c003d6cf3ad1a37d71510632c9a88ba22cfdd7a0d21b6b772561cd515884';
      $scope.user.client_secret = '4d90135d4a7177a8f712f4f6ab2434b91842817ca0759074469b93dacd3d412e';
      $scope.user.grant_type = 'password',
      $scope.user.provider = 'identity';

      // Toggle loading state of button
      $scope.loading = true;

      var feedback = {};

      $http({
        url: 'http://goodgym-api.herokuapp.com/oauth/token',
        method: 'POST',
        data: $scope.user,
      }).success(function(data, status, headers, config) {
        // success
        console.log('success: ');
        if (data) {
          AuthService.isLogged = true;
          AuthService.token = data.access_token;
          console.log(AuthService);
          feedback = {
            class: 'success',
            title: 'Logged in!',
            message: 'You\'ve successfully logged in, well done!',
            icon: 'checkmark',
            animation: 'fadeIn'
          };
          NotificationService.setFeedback(feedback);

        } else {
          AuthService.isLogged = false;
          AuthService.token = '';
          feedback = {
            class: 'error',
            title: 'Error logging in!',
            message: 'NO NO NO',
            icon: 'cross',
            animation: 'pullDown'
          };
          NotificationService.setFeedback(feedback);

        }

        $scope.loading = false;

      }).error(function(data, status, headers, config) {
        // error
        console.log('error: ')
        console.log(data);
        AuthService.isLogged = false;
        AuthService.token = '';

        feedback = {
          class: 'error',
          title: 'Error logging in!',
          message: 'NO NO NO',
          icon: 'cross',
          animation: 'pullDown'
        };

        NotificationService.setFeedback(feedback);

        $scope.loading = false;
      });
    };

  });
