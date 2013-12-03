'use strict';

angular.module('goodgymApp')
    .controller('TeamCtrl', ['$scope', 'AuthService',
        function($scope, AuthService) {
            $scope.title = 'My Team';

            $scope.tokenIntro = 'tkn:';
            $scope.token = AuthService.getToken();
        }
    ]);
