'use strict';

angular.module('angularGoodgymApp')
// .controller('LoginCtrl', function($scope, $http, AuthService, NotificationService) {

// $scope.login = function() {
//   $scope.user.client_id = AuthService.getClientId();
//   $scope.user.client_secret = AuthService.getClientSecret();
//   $scope.user.grant_type = 'password',
//   $scope.user.provider = 'identity';

//   // Toggle loading state of button
//   $scope.loading = true;

//   var feedback = {};

//   $http({
//     url: 'http://goodgym-api.herokuapp.com/oauth/token',
//     method: 'POST',
//     data: $scope.user,
//   }).success(function(data, status, headers, config) {
//     // success
//     console.log('success: ');
//     if (data) {
//       AuthService.setLoggedIn(true);
//       AuthService.setToken(data.access_token);
//       console.log(AuthService);
//       feedback = {
//         class: 'success',
//         title: 'Logged in!',
//         message: 'You\'ve successfully logged in, well done!',
//         icon: 'checkmark',
//         animation: 'fadeIn'
//       };
//       NotificationService.setNotice(feedback);

//     } else {
//       AuthService.setLoggedIn(false);
//       AuthService.setToken('');
//       feedback = {
//         class: 'error',
//         title: data.error,
//         message: data.error_description,
//         icon: 'cross',
//         animation: 'pullDown'
//       };
//       NotificationService.setNotice(feedback);

//     }

//     $scope.loading = false;

//   }).error(function(data, status, headers, config) {
//     // error
//     AuthService.setLoggedIn(false);
//     AuthService.setToken('');

//     feedback = {
//       class: 'error',
//       title: data.error,
//       message: data.error_description,
//       icon: 'cross',
//       animation: 'pullDown'
//     };

//     NotificationService.setNotice(feedback);

//     $scope.loading = false;
//   });
// };

// });

.controller('LoginCtrl', ['$rootScope', '$scope', '$location', '$window', 'AuthService',
  function($rootScope, $scope, $location, $window, AuthService) {

    $scope.rememberme = true;
    $scope.login = function() {

      // Toggle loading state of button
      $scope.loading = true;

      AuthService.login(
          $scope.user
          // {
          // username: $scope.username,
          // password: $scope.password,
          // rememberme: $scope.rememberme
          // }
        ,
        function(res) {
          $location.path('/');
        },
        function(err) {
          $rootScope.error = "Failed to login";
        });
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  }
]);
