angular.module("searchApp")
  .filter("capitalize", function() {

    return function(item) {
       // récupération de la première lettre
      var firstChar = item.charAt(0);
      // récupération du reste de la chaîne de caractères
      var remainingChars = item.substring(1);

      // on retourne une concaténation de la première lettre
      // passée en majuscule avec le reste
      return firstChar.toUpperCase() + remainingChars;
    };

  }); // fin capitalizeFilter
