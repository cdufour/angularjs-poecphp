angular.module("searchApp")
  .controller("testController", function($scope) {

    $scope.message = "bonjour";

    $scope.clients = [
       {name:"Zola", postcode:96000},
       {name:"Hugo", postcode:96500},
       {name:"Flaubert", postcode:92500},
       {name:"Calvino", postcode:96300}
    ];

  }); // fin testController
