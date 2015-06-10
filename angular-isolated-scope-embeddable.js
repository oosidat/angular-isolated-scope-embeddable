angular.module('isolatedScopeEmbeddable')
.directive('embeddable', function(){
	return {
		link: function($scope, $elem, $attributes, controller, $transcludeFn) {

			var innerScope = $scope.$new();

			$transcludeFn(innerScope, function(clone) {
				$elem.empty();
				$elem.append(clone);

				$elem.on('$destroy', function() {
					innerScope.$destroy();
				});

			});
		}
	};
});
