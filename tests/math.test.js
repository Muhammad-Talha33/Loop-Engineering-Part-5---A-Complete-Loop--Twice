const test = require('node:test');
const assert = require('node:assert');
const { add, multiply } = require('../src/math');

test('add(2, 3) returns 5', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('add(-1, 1) returns 0', () => {
  assert.strictEqual(add(-1, 1), 0);
});

test('multiply(2, 3) returns 6', () => {
  assert.strictEqual(multiply(2, 3), 6);
});

test('multiply(5, 0) returns 0', () => {
  assert.strictEqual(multiply(5, 0), 0);
});
