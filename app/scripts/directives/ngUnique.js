'use strict';

angular.module('angularGoodgymApp')
  .directive('ngUnique', ['$http',
    function(async) {
      return {
        require: 'ngModel',
        link: function(scope, elem, attrs, ctrl) {
          elem.on('blur', function() {
            scope.$apply(function() {
              var val = elem.val();
              var req = {
                "email": val
              }
              var ajaxConfiguration = {
                method: 'POST',
                url: 'http://goodgym-api.herokuapp.com/api/v1/verify_unique_email',
                data: req
              };
              async(ajaxConfiguration)
                .success(function(data, status, headers, config) {
                	console.log('the email address has been verified...');
                  ctrl.$setValidity('unique', data.unique);
                });
            });
          });
        }
      }
    }
  ]);
