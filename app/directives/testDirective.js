angular.module("searchApp")
  .directive("test", function() {

    return {
      restrict:"EA", // Element ou Attribute
      templateUrl:"app/directives/templates/test.html"
    };

  }); // fin testDirective
