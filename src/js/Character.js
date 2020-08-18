/* eslint-disable no-else-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
export default class Character {
  constructor(name) {
    this.name = name;
    // this.type = '';
    this.health = 100;
    this.level = 1;

    if (typeof (this.name) !== 'string' || this.name.length < 2 || this.name.length > 10) this.nameEntryError();
  }

  nameEntryError() {
    throw new Error('Введены не корректные данные!');
  }

  levelUp() {
    if (this.health > 0) {
      this.level++;
      this.health = 100;
      this.attack += (this.attack / 100) * 20;
      this.defence += (this.defence / 100) * 20;
      return this.health;
    } else {
      throw new Error('Нельзя повысить левел умершего!');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
      return this.health;
    } else {
      throw new Error('Нельзя расчитать левел жизни персонажа. Персонаж умер!');
    }
  }
}
