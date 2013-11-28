// 'use strict';

angular.module('angularGoodgymApp')
// .controller('SignupCtrl', function($scope, $http, AuthService, NotificationService) {

//     $scope.loading = false;

//     $scope.signUp = function() {
//       console.log('adding user:');
//       console.log($scope.data);

//       $scope.data.client_id = AuthService.getClientId();

//       // Toggle loading state of button
//       $scope.loading = true;

//       var feedback = {};

//       $http({
//         url: 'http://goodgym-api.herokuapp.com/api/v1/runners',
//         method: 'POST',
//         data: $scope.data,
//       }).success(function(data, status, headers, config) {
//         // success
//         console.log('success: ');
//         if (data) {
//           AuthService.setLoggedIn(true);
//           AuthService.setToken(data.token);
//           console.log(AuthService);
//           feedback = {
//             class: 'success',
//             title: 'You\'re Registered!',
//             message: 'Welcome along, we look forward doing some exercise and good with you!',
//             icon: 'checkmark',
//             animation: 'fadeIn'
//           };
//           NotificationService.setNotice(feedback);

//         } else {
//           AuthService.setLoggedIn(false);
//           AuthService.setToken('');
//           feedback = {
//             class: 'error',
//             title: data.error,
//             message: data.error_description,
//             icon: 'cross',
//             animation: 'pullDown'
//           };
//           NotificationService.setNotice(feedback);

//         }

//         $scope.loading = false;

//       }).error(function(data, status, headers, config) {
//         // error
//         AuthService.setLoggedIn(false);
//         AuthService.setToken('');
//         feedback = {
//           class: 'error',
//           title: data.error,
//           message: data.error_description,
//           icon: 'cross',
//           animation: 'pullDown'
//         };

//         NotificationService.setNotice(feedback);

//         $scope.loading = false;
//       });
//     };
// });
//

.controller('SignupCtrl', ['$rootScope', '$scope', '$location', 'AuthService',
  function($rootScope, $scope, $location, AuthService) {
    $scope.role = AuthService.userRoles.user;
    $scope.userRoles = AuthService.userRoles;

    $scope.signUp = function() {

      // Toggle loading state of button
      $scope.loading = true;

      AuthService.register(
        // {
        //         username: $scope.username,
        //         password: $scope.password,
        //         role: $scope.role
        //     }
        $scope.data,
        function() {
          $scope.loading = false;
          // $location.path('/');
        },
        function(err) {
          $rootScope.error = err;
        });
    };
  }
]);
