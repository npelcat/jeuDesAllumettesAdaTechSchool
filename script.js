//Déclaration des variables globales
let gameStart = 50;
let currentPlayer = 1;
//Pour 3 joueurs et plus :
let nbrOfPlayer = parseInt(prompt("Combien y a t-il de joueurs ?"));

//Fonction qui gère le nombre de joueurs :
const managePlayer = () => {
  // Pour 2 joueurs : Changer de joueur par une ternaire
  // currentPlayer = currentPlayer === 2 ? 1 : 2;

  //Pour trois joueurs et plus :
  currentPlayer = (currentPlayer % nbrOfPlayer) + 1;

  // Afficher le tour du joueur
  document.getElementById(
    "player"
  ).innerHTML = `Joueur ${currentPlayer}, retire tes allumettes`;

  return currentPlayer;
};

//Fonction qui gère les conditions pour le chiffre entré et les messages d'erreurs :
const lucifer = (nbrRemove) => {
  document.getElementById("errorMessage").innerHTML = "";

  if (gameStart === 0)
    return (document.getElementById("win").innerHTML = "Victoire !");

  if (
    nbrRemove >= 1 &&
    nbrRemove <= 6 &&
    gameStart > 0 &&
    nbrRemove <= gameStart
  ) {
    gameStart = gameStart - nbrRemove;
    document.getElementById("nbrLucifer").innerHTML = gameStart;
  } else {
    document.getElementById("errorMessage").innerHTML =
      "Erreur ! Tu ne peux pas choisir un nombre au délà de 6 ni un nombre supérieur au nombre restant d'allumettes.";
  }
};

//Evènement sur le bouton qui joue le jeu complet :
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let number = parseInt(document.getElementById("chooseNbr").value);
  lucifer(number);
  managePlayer();
  document.getElementById("chooseNbr").value = "";
});
