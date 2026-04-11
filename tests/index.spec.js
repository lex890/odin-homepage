import { greeting } from '../src/greeting.js';

test('This is greeting', () => {
  expect(greeting).toBe("Hi, odinite");
})