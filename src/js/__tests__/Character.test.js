/* eslint-disable no-undef */
import Character from '../Character';

const character = new Character('ZZZ');

test('throws on Character', () => {
  expect(() => {
    character.name = 123;
    character.nameEntryError();
  }).toThrow();
});

test('throws on Character', () => {
  expect(() => {
    character.name = 'Z';
    character.nameEntryError();
  }).toThrow();
});

test('throws on Character', () => {
  expect(() => {
    character.name = 'Zzzzzzzzzzzz';
    character.nameEntryError();
  }).toThrow();
});

test('up level health', () => {
  character.health = 50;
  expect(character.levelUp()).toBe(100);
});

test('throws on levelUp', () => {
  character.health = 0;
  expect(() => {
    character.levelUp();
  }).toThrow();
});

test('throws on levelUp', () => {
  character.health = -10;
  expect(() => {
    character.levelUp();
  }).toThrow();
});

test('throws on damage', () => {
  character.health = -10;
  character.defence = 25;

  expect(() => {
    character.damage(25);
  }).toThrow();
});

test('calculate the level of health', () => {
  character.health = 100;
  character.defence = 25;

  expect(character.damage(25)).toBeCloseTo(81.25);
});
