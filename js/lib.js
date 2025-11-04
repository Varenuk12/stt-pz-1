/**
 * This function must add two numbers and return sum of numbers
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function sum(a, b) {
  return Number(a) + Number(b);
}

/**
 * This function takes a number and raises it to a power
 * @param x
 * @param n
 * @returns {number}
 */
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

/**
 * This function calculate factorial of number
 * @param n {number}
 * @returns {number}
 */
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

/**
 * This function calculate Fibonacci sequence
 * @param n
 * @returns {number}
 */
function fibonacci(n) {
  return n > 2 ? fibonacci(n - 1) + fibonacci(n - 2) : 1;
}

/**
 * This function must remove some element from array of strings by name
 * @param list {string[]}
 * @param name {string}
 * @returns {string[]}
 */
function removeByName(list, name) {
  const result = [...list];
  const index = result.indexOf(name);
  if (index !== -1) {
    result.splice(index, 1);
  }
  return result;
}

/**
 * This function create counter
 * @param currentCount {number}
 * @returns {function(): number}
 */
function makeCounter(currentCount) {
  return function () {
    return currentCount++;
  };
}

/**
 * This function create async timeout and return unixtime like timer Id
 * @param time {number}
 * @returns {number}
 */
function getAsyncTimerId(time) {
  let timerId;
  setTimeout(() => {
    timerId = Math.floor(Date.now() / 1000);
  }, time);
  return timerId;
}

/**
 * This function return promise and multiply parameters
 * @param x{number}
 * @returns {Promise<number>}
 */
async function asyncMultiply(x) {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000, 2 * x);
  });
}

/**
 * This function simulates a GET HTTP request to server
 * Works both in Node.js and Browser
 * @param url {string}
 * @returns {Promise<string>}
 */
function httpGet(url) {
  return new Promise((resolve, reject) => {
    // Якщо url порожній або не є рядком — помилка
    if (!url || typeof url !== 'string') {
      reject(new Error('Invalid URL'));
      return;
    }

    // Емуляція мережевої помилки
    if (url.includes('error')) {
      reject(new Error('Network Error'));
      return;
    }

    // Емуляція успішного запиту
    setTimeout(() => {
      resolve(`GET request to ${url} completed`);
    }, 500);
  });
}

/**
 * Export all functions for testing
 */
export {
  sum,
  pow,
  factorial,
  fibonacci,
  removeByName,
  makeCounter,
  getAsyncTimerId,
  asyncMultiply,
  httpGet,
};
