angular.module("searchApp")
  .controller("adminController",
    function($scope, $rootScope, $location, countryFactory) {

    // déclaration facultative (JS le fera de lui-même sinon)
    // d'un object client initialisé avec des valeurs null
    // ces valeurs seront mises à jour par les directives ng-model
    // attachées aux input du formulaire
    $scope.client = {
      name: null,
      postcode: null,
      country: null,
      password: null // propriété non gérée dans la vue (pas d'input)
    };

    // on initialisie le choix dans le menu select
    // avec la valeur "none" (correspondant à la première option)
    $scope.client.country = "none";
    $scope.message = "";
    $scope.messageClass = "";
    $scope.countries = countryFactory.getAll();

    // on ajoute au $scope la function addClient()
    $scope.addClient = function() {
      // validation des données
      if ($scope.client.name !== null &&
      $scope.client.postcode !== null &&
      $scope.client.country !== "none"
      ) {
        // si les 3 conditions sont remplies
        // on ajoute le client au tableau de clients
        $scope.message = "Client ajouté avec succès";
        $scope.messageClass = "success"; // applique la classe css
        $rootScope.clients.push($scope.client);

        // redirection vers la page d'accueil
        $location.path("/");
      } else {
        $scope.message = "Tous les champs sont obligatoires !";
        $scope.messageClass = "error"; // applique la classe css
      }

    };



  }); // fin adminController
