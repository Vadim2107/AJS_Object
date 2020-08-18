/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
export default class Bowerman extends Character {
  constructor(name) {
    super(name);
    this.type = 'Bowerman';
    this.attack = 25;
    this.defence = 25;
  }
}
