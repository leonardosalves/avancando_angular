module.exports = function() {
	return {
		template: "<div class='alert alert-success text-center'><p>{{ title }}<b ng-transclude></b></p> </div>",
        replace: true,
        restrict: "AE",
        scope: {
        	title: '@' 
        },
        transclude: true
	};
};