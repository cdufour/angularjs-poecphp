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
      // elle retourne les pays appartenant au continent passé en entrée
      var matchingCountries = [];
      countries.forEach(function(e) {
        if (continent === e.continent) {
          // on ajoute au tableau matchingCountries
          // l'élément correspondant au continent recherché
          matchingCountries.push(e);
        }
      }); // fin forEach
      // on renvoie le tableau des pays correspondant au continent recherché
      return matchingCountries;
    };

    return factory;

  }); // fin countryFactory
