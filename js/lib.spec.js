import { expect } from 'chai';
import {
  sum,
  pow,
  factorial,
  fibonacci,
  removeByName,
  makeCounter,
  getAsyncTimerId,
  asyncMultiply,
  httpGet
} from './lib.js';

describe('Test suite for testing lib.js', () => {
  // ============================
  // sum()
  // ============================
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      expect(sum(1, 2)).to.equal(3);
      expect(sum(-10, 5)).to.equal(-5);
      expect(sum(-10, 10)).to.equal(0);
    });

    it('should return NaN if one parameter is skipped', () => {
      expect(sum(1)).to.be.NaN;
    });

    it('should convert string to number if input parameters are strings', () => {
      expect(sum('5', '1')).to.equal(6);
      expect(sum(10, '1')).to.equal(11);
      expect(sum('25', 5)).to.equal(30);
    });
  });

  // ============================
  // pow()
  // ============================
  describe('Test suite for testing pow function', () => {
    it('should raise x to the n power', () => {
      expect(pow(2, 3)).to.equal(8);
      expect(pow(3, 2)).to.equal(9);
      expect(pow(5, 0)).to.equal(1);
      expect(pow(10, 1)).to.equal(10);
    });
  });

  // ============================
  // factorial()
  // ============================
  describe('Test suite for testing factorial function', () => {
    it('should calculate factorial correctly', () => {
      expect(factorial(5)).to.equal(120);
      expect(factorial(0)).to.equal(1);
      expect(factorial(1)).to.equal(1);
    });
  });

  // ============================
  // fibonacci()
  // ============================
  describe('Test suite for testing fibonacci function', () => {
    it('should calculate fibonacci sequence correctly', () => {
      expect(fibonacci(1)).to.equal(1);
      expect(fibonacci(2)).to.equal(1);
      expect(fibonacci(5)).to.equal(5);
      expect(fibonacci(6)).to.equal(8);
    });
  });

  // ============================
  // removeByName()
  // ============================
  describe('Test suite for testing removeByName function', () => {
    it('should remove some element from array', () => {
      const list = ['apple', 'banana', 'cherry'];
      const result = removeByName(list, 'banana');

      expect(result).to.deep.equal(['apple', 'cherry']);
      expect(list).to.deep.equal(['apple', 'banana', 'cherry']);
    });

    it('should not remove element from array if name not found', () => {
      const list = ['apple', 'banana', 'cherry'];
      const result = removeByName(list, 'orange');

      expect(result).to.deep.equal(['apple', 'banana', 'cherry']);
    });
  });

  // ============================
  // makeCounter()
  // ============================
  describe('Test suite for testing makeCounter function', () => {
    it('should return incremented counter value on each call', () => {
      const counter = makeCounter(0);
      expect(counter()).to.equal(0);
      expect(counter()).to.equal(1);
      expect(counter()).to.equal(2);
    });

    it('should start counting from given initial value', () => {
      const counter = makeCounter(5);
      expect(counter()).to.equal(5);
      expect(counter()).to.equal(6);
    });
  });

  // ============================
  // getAsyncTimerId()
  // ============================
  describe('Test suite for testing getAsyncTimerId function', () => {
    it('should return undefined immediately (since async)', () => {
      const timerId = getAsyncTimerId(100);
      expect(timerId).to.be.undefined;
    });
  });

  // ============================
  // asyncMultiply()
  // ============================
  describe('Test suite for testing asyncMultiply function', () => {
    it('should return doubled value asynchronously', async () => {
      const result = await asyncMultiply(5);
      expect(result).to.equal(10);
    });
  });

  // ============================
  // httpGet() — замокуємо XMLHttpRequest
  // ============================
  describe('Test suite for testing httpGet function', () => {
    it('should resolve on success', async () => {
      const result = await httpGet('https://example.com/api');
      expect(result).to.equal('GET request to https://example.com/api completed');
    });

    it('should reject on network error', async () => {
      try {
        await httpGet('https://example.com/error');
        throw new Error('Expected function to reject');
      } catch (err) {
        expect(err).to.be.an('error');
        expect(err.message).to.equal('Network Error');
      }
    });
  });
});