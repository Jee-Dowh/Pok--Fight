import Pokémon from "./Pokemons.js";

// ennemy roster
const ennemies = [];

// initialization of the  different pokemon available
const Arcanin = new Pokémon("Arcanin", 100, 80, 30, 30, "feu", "eau", [
  "morsure",
  "feu follet",
]);
const Leviator = new Pokémon("Léviator", 100, 70, 60, 15, "eau", "électrique", [
  "coup de queue",
  "hydrocannon",
]);
const Elekable = new Pokémon("Elékable", 100, 50, 20, 40, "électrique", "sol", [
  "charge",
  "poing éclair",
]);
const Cacturne = new Pokémon("Cacturn", 100, 80, 50, 20, "plante", "feu", [
  "fouet",
  "lame verte",
]);

const Ossatueur = new Pokémon("Ossatueur", 100, 40, 30, 60, "sol", "plante", [
  "frappe os",
  "éclat-roc",
]);

// Pokemon available put in a list
const ennemiesPool = [Arcanin, Leviator, Elekable, Cacturne, Ossatueur];

// Randomly forming the ennemy roster
let i = 0;
while (ennemies.length < 3) {
  const ennemy = ennemiesPool[Math.floor(Math.random() * ennemiesPool.length)];
  if (!ennemies.includes(ennemy)) {
    ennemies.push(ennemy);
  }
}

function DisplayEnnemies(ennemies) {
  for (let i = 0; i < ennemies.length; i++) {
    console.log(ennemies[i].name);
  }
}
console.log("Voici le roster ennemie");
DisplayEnnemies(ennemies);
