'use strict';

angular.module('angularGoodgymApp')
  .controller('SignupCtrl', function ($scope, $http, AuthService, NotificationService) {

    $scope.loading = false;

    $scope.signUp = function() {
      console.log('adding user:');
      console.log($scope.data);

      $scope.data.client_id = AuthService.clientId;

      // Toggle loading state of button
      $scope.loading = true;

      var feedback = {};

      $http({
        url: 'http://goodgym-api.herokuapp.com/api/v1/runners',
        method: 'POST',
        data: $scope.data,
      }).success(function(data, status, headers, config) {
        // success
        console.log('success: ');
        if (data) {
          AuthService.isLogged = true;
          AuthService.token = data.token;
          console.log(AuthService);
          feedback = {
            class: 'success',
            title: 'You\'re Registered!',
            message: 'Welcome along, we look forward doing some exercise and good with you!',
            icon: 'checkmark',
            animation: 'fadeIn'
          };
          NotificationService.setNotice(feedback);

        } else {
          AuthService.isLogged = false;
          AuthService.token = '';
          feedback = {
            class: 'error',
            title: data.error,
            message: data.error_description,
            icon: 'cross',
            animation: 'pullDown'
          };
          NotificationService.setNotice(feedback);

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
          title: data.error,
          message: data.error_description,
          icon: 'cross',
          animation: 'pullDown'
        };

        NotificationService.setNotice(feedback);

        $scope.loading = false;
      });
    };
  });
