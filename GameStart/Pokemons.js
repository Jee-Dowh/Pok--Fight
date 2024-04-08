class Pokémon {
  // Initialization of pokémons and their stats
  constructor(name, hp, attack, defense, speed, type, weakness, actions) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.type = type;
    this.weakness = weakness;
    this.actions = actions;
  }

  displayStats() {
    console.log(this.hp);
    console.log(this.attack);
    console.log(this.defense);
    console.log(this.speed);
    console.log(this.type);
    console.log(this.weakness);
    console.log(this.actions);
    for (let i = 0; i < this.actions.length; i++) {
      console.log(this.actions[i]);
    }
  }
}
export default Pokémon;
