'use strict';

angular.module('angularGoodgymApp')
    .controller('SignupCtrl', ['$rootScope', '$scope', '$location', 'AuthService',
        function($rootScope, $scope, $location, AuthService) {

            $scope.role = AuthService.userRoles.user;
            $scope.userRoles = AuthService.userRoles;

            $scope.signUp = function() {

                // Toggle loading state of button
                $scope.loading = true;

                AuthService.register(
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
