'use strict';

angular.module('angularGoodgymApp')
  .directive('feedback', function () {
    return {
      templateUrl: '/views/partials/feedback.html',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
        scope.feedback;
      }
    };
  });


// directive('', ['', function(){
// 	// Runs during compile
// 	return {
// 		// name: '',
// 		// priority: 1,
// 		// terminal: true,
// 		// scope: {}, // {} = isolate, true = child, false/undefined = no change
// 		// cont­rol­ler: function($scope, $element, $attrs, $transclue) {},
// 		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
// 		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
// 		// template: '',
// 		// templateUrl: '',
// 		// replace: true,
// 		// transclude: true,
// 		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
// 		link: function($scope, iElm, iAttrs, controller) {
			
// 		}
// 	};
// }]);