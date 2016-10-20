angular.module("searchApp")
  .factory("countryFactory", function() {

    var factory = {}; // initialisation d'un objet

    // variable locale => en POO on parle de propriété privée
    var countries = [
      {name:"Allemagne", continent:"Europe"},
      {name:"France", continent:"Europe"},
      {name:"Italie", continent:"Europe"},
      {name:"Roumanie", continent:"Europe"},
      {name:"Algérie", continent:"Afrique"},
      {name:"Mozambique", continent:"Afrique"},
      {name:"Ethiopie", continent:"Afrique"},
      {name:"Chine", continent:"Asie"}
    ];

    // getter: function d'accès (lecture) à des données
    factory.getAll = function() {
      return countries;
    };

    factory.getByContinent = function(continent) {
      // la fonction reçoit en entrée un nom de continent
      // elle retourne les pays appartenant au continent passé
      // en entrée

      // étape 1 : parcourir le tableau des pays
      countries.forEach(function(e) {
        console.log(e.name);
      });
    };

    return factory;

  }); // fin countryFactory
