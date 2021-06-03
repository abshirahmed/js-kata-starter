export default class Character {
  public constructor(public health = 1000, public level = 1, public alive = true) {
  }


  attack(character: Character) {
    character.health -= 200;
    if (character.health <= 0) {
      character.health = 0
      character.alive = false;
    }
  }

  heal(character: Character) {
    if(!character.alive) return
    character.health += 200;
    if (character.health >= 1000) {
      character.health = 1000
    }
  }
}