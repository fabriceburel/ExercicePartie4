/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) { //valider calculer la taille de la chaine de caractère
   var tailleString=texte.length;
    return tailleString;
}
var remplaceECar = function (texte) { //remplace un caractère par un autre
    texte=texte.replace('e', ' ');
    return texte;
}
var concatString = function (texte1, texte2) { //valider concaténer 2 chaines de caractères
    texte=texte1+texte2;
    return texte;
}
var afficherCar5 = function (texte) { //afficher un caractère situé dans une chaine de caractère
    var char = texte.charAt(4);
    return char;
}
var afficher9Car = function (texte) {
  var nineChar='';
  for (var nav = 0; nav < 9; nav++) {
      nineChar=nineChar+texte[nav];
  }
return nineChar;
}
var majusculeString = function (texte) { // afficher en majuscule la chaine de caractère
    texte=texte.toUpperCase();
    return texte;
}
var minusculeString = function (texte) { // afficher en minuscule la chaine de caractère
  texte=texte.toLowerCase();
  return texte;
}
var SupprEspaceString = function (texte) { //permet de supprimer les espaces avant et après, utile pour les formulaires
    texte=texte.trim();
    return texte;
}
var IsString = function (texte) {
  var testString=isNaN(texte);  //fonction IsString
    return testString;
}
var AfficherExtensionString = function (texte) {
  var extension='';
  var positionPoint=texte.indexOf('.');
  if (positionPoint > -1){
    for (var nav = positionPoint+1; nav < texte.length; nav++) {
      extension=extension+texte[nav];
    }
  }
  return extension;
}

var NombreEspaceString = function (texte) {
  var numberSpace=0;
  //permet de parcourir l'ensemble du texte caractère par caractère
  for (var nav = 0; nav < texte.length; nav++) {
    //permet de vérifier si le caractère est bien un espace
      if(texte[nav] ===' '){
        numberSpace++;
      }
  }
return numberSpace;
}

var InverseString = function (texte) {
  var inverseText='';
  //permet de parcourir l'ensemble du texte caractère par caractère
  for (var nav = 0; nav < texte.length; nav++) {
    inverseText=texte[nav]+inverseText;
  }
return inverseText;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) { //calcule x puissance Y
    var result=Math.pow(x,y);
    return result;
}
var valeurAbsolue = function (nombre) { //donne la valeur absolue
    var result=Math.abs(nombre);
    return result;
}
var valeurAbsolueArray = function (array) {
    var sizeArray=array.length;
    var result=[];
    for(var nav=0;nav<sizeArray;nav++){
      result.push(Math.abs(array[nav])); //push permet d'envoyer la valeur dans le tableau de variable result
    }
    return result;
}
var sufaceCercle = function (rayon) { //calcul de la surface d'un cercle
    var surface= Math.round(Math.PI*Math.pow(rayon,2));
    return surface;
}
var hypothenuse = function (ab, ac) {
    result=Math.hypot(ab,ac);
    return result;
}
var calculIMC = function (poids, taille) {
  var  result=poids/(taille*taille);
  //permet de ne garder que décimal après la virgule
  result=parseFloat(result.toFixed(2));

    return result;
}
