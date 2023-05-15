import { sortCharacters } from '../index.js';

test('should compare arrays', () => {
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'мечник', health: 80 },
    { name: 'лучник', health: 40 },
  ];
  const input = [
    { name: 'лучник', health: 40 },
    { name: 'маг', health: 100 },
    { name: 'мечник', health: 80 },
  ];
  const sortedArray = sortCharacters(input);
  expect(sortedArray).toEqual(expected);
});
