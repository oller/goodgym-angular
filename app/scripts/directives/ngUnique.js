'use strict';

//On registering, asynchronously check whether the user's email is already registered
angular.module('goodgymApp')
  .directive('ngUnique', ['$http',
    function(async) {
      return {
        require: 'ngModel',
        link: function($scope, element, attrs, ctrl) {
          element.on('blur', function() {
            $scope.$apply(function() {
              var val = element.val();
              var req = {
                'email': val
              };
              var ajaxConfiguration = {
                method: 'POST',
                url: 'http://goodgym-api.herokuapp.com/api/v1/verify_unique_email',
                data: req
              };
              async(ajaxConfiguration)
                .success(function(data, status, headers, config) {
                  ctrl.$setValidity('unique', data.unique);
                });
            });
          });
        }
      };
    }
  ]);
