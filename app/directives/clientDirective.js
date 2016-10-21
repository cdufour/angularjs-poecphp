angular.module("searchApp")
  .directive("client", function() {

    return {
      restrict:"E", // Element
      templateUrl:"app/directives/templates/client.html",
      scope: {
        data: '='
      }
    };

  }); // fin clientDirective
