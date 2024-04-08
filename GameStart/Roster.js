import Pokémon from "./Pokemons.js";

// team that the player is forming
const roster = [];

// initialization of the  different pokemon available
const Pikachu = new Pokémon("Pikachu", 100, 60, 10, 70, "électrique", "eau", [
  "charge",
  "tonnerre",
]);
const Carapuce = new Pokémon("Carapuce", 100, 70, 30, 55, "eau", "plante", [
  "coup de queue",
  "bulle d'eau",
]);
const Salameche = new Pokémon("Salamèche", 100, 90, 20, 30, "feu", "eau", [
  "morsure",
  "lance-flamme",
]);
const Bulbizarre = new Pokémon("Bulbizarre", 100, 80, 50, 20, "plante", "feu", [
  "fouet",
  "tempête verte",
]);

Pikachu.displayStats();
// Pokemon available put in a list
const pokemonPool = [Pikachu, Carapuce, Salameche, Bulbizarre];
// create buttons through the JS not HTML so we can have one function for everything
// functions to add each specific pokemon to the player roster
function addSalameche() {
  roster.push(Salameche);
}
function addCarapuce() {
  roster.push(Carapuce);
}
function addPikachu() {
  roster.push(Pikachu);
}
function addBulbizarre() {
  roster.push(Bulbizarre);
}

/*function addPokemon(buttonId) {
  roster.push(Bulbizarre);
  displayRoster();
}
const start = document.querySelector("button");
start.addEventListener("click", addPokemon);*/

// Attach a click event listener to the button

const pickPikachu = document.getElementById("Pikachu");
const pickSalameche = document.getElementById("Salamèche");
const pickCarapuce = document.getElementById("Carapuce");
const pickBulbizarre = document.getElementById("Bulbizarre");

pickPikachu.addEventListener("click", addPikachu);
pickSalameche.addEventListener("click", addSalameche);
pickCarapuce.addEventListener("click", addCarapuce);
pickBulbizarre.addEventListener("click", addBulbizarre);

function displayRoster() {
  for (let i = 0; i < roster.length; i++) {
    console.log(roster[i].name);
  }
}

//highlight cards when pressed (until pressed again)
const button = document.querySelector(".card");

button.addEventListener("click", () => {
  button.classList.toggle("active");
});
