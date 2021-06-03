import Character from "./character";

describe("Character", function() {
  it("should start with health 1000", function() {
    const character = new Character();
    expect(character.health).toEqual(1000);
    expect(character.level).toEqual(1);
    expect(character.alive).toEqual(true);
  });

  it("should deal damage to another character", () => {
    const firstCharacter = new Character();
    const secondCharacter = new Character();

    firstCharacter.attack(secondCharacter);

    expect(secondCharacter.health).toEqual(800);
  });

  it("should die and set health to 0 when attack exceeds health level", () => {
    const firstCharacter = new Character();
    const secondCharacter = new Character(200);

    firstCharacter.attack(secondCharacter);
    firstCharacter.attack(secondCharacter);

    expect(secondCharacter.alive).toBeFalsy();
    expect(secondCharacter.health).toEqual(0);
  });

  it("should increase health for a living character", function() {
    const firstCharacter = new Character();
    const secondCharacter = new Character(800);

    firstCharacter.heal(secondCharacter);
    firstCharacter.heal(secondCharacter);

    expect(secondCharacter.health).toEqual(1000);
  });

  it("should not increase health for a dead character", function() {
    const firstCharacter = new Character();
    const secondCharacter = new Character(0, 1, false);

    firstCharacter.heal(secondCharacter);
    firstCharacter.heal(secondCharacter);

    expect(secondCharacter.alive).toBeFalsy();
    expect(secondCharacter.health).toEqual(0);
  });
});
