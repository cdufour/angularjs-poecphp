angular.module("searchApp")
  .controller("helpController", function($scope) {

    // initialisation des variables
    $scope.email = "";
    $scope.message = "";

    $scope.saveEmail = function() {
      // .indexOf renvoie la position de la chaîne
      // recherchée. Retourne -1 si chaîne non trouvée
      // amélioration possible : expression régulière
      if ($scope.email.indexOf("@") === -1) {
        $scope.message = "bbooooooohhhhh";
      } else {
        $scope.message = "Bravo et merci";
      }
    };

  }); // fin helpController
