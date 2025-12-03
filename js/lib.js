/**
 * Додавання двох чисел
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function sum(a, b) {
  return Number(a) + Number(b);
}

/**
 * Піднесення числа до степеня (підтримує рядки, від’ємні степені)
 * @param x {number|string}
 * @param n {number|string}
 * @returns {number}
 */
function pow(x, n) {
  x = Number(x);
  n = Number(n);
  let result = 1;

  if (n < 0) {
    for (let i = 0; i < -n; i++) {
      result *= x;
    }
    return 1 / result;
  }

  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

/**
 * Факторіал числа
 * @param n {number}
 * @returns {number}
 */
function factorial(n) {
  if (n < 0) throw new Error("Факторіал визначений тільки для невід’ємних чисел");
  return n ? n * factorial(n - 1) : 1;
}

/**
 * Ряд Фібоначчі (ітеративна реалізація для швидкості)
 * @param n {number}
 * @returns {number}
 */
function fibonacci(n) {
  if (n <= 2) return 1;
  let a = 1, b = 1;
  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

/**
 * Видалення елемента з масиву за ім’ям
 * @param list {string[]}
 * @param name {string}
 * @returns {string[]}
 */
function removeByName(list, name) {
  let result = [...list];
  let index = result.indexOf(name);
  if (index !== -1) {
    result.splice(index, 1);
  }
  return result;
}

/**
 * Лічильник
 * @param currentCount {number}
 * @returns {function(): number}
 */
function makeCounter(currentCount) {
  return function () {
    return currentCount++;
  };
}

/**
 * Асинхронний таймер, повертає Unix-час (секунди)
 * @param time {number}
 * @returns {Promise<number>}
 */
function getAsyncTimerId(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const timerId = Math.floor(Date.now() / 1000);
      resolve(timerId);
    }, time);
  });
}

/**
 * Асинхронне множення
 * @param x {number}
 * @returns {Promise<number>}
 */
function asyncMultiply(x) {
  return new Promise(resolve => {
    setTimeout(resolve, 3000, 2 * x);
  });
}

/**
 * GET-запит (тільки для браузера, з XMLHttpRequest)
 * @param url {string}
 * @returns {Promise<unknown>}
 */
function httpGet(url) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        let error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };
    xhr.onerror = function () {
      reject(new Error("Network Error"));
    };
    xhr.send();
  });
}

/**
 * Повертає елемент масиву за індексом (з fallback)
 * @param {Array} array
 * @param {number} index
 * @param {*} fallback
 * @returns {*}
 */
function getElement(array, index, fallback = null) {
  if (!Array.isArray(array)) {
    throw new TypeError("Перший параметр має бути масивом");
  }
  if (typeof index !== "number" || Number.isNaN(index)) {
    throw new TypeError("Індекс має бути числом");
  }
  const realIndex = index < 0 ? array.length + index : index;
  if (realIndex < 0 || realIndex >= array.length) {
    return fallback;
  }
  return array[realIndex];
}

/**
 * Обгортка над Math.pow
 * @param {number|string} base
 * @param {number|string} exponent
 * @returns {number}
 */
function pow_barmak(base, exponent) {
  return Math.pow(Number(base), Number(exponent));
}

module.exports = {
  sum,
  pow,
  factorial,
  fibonacci,
  removeByName,
  makeCounter,
  getAsyncTimerId,
  asyncMultiply,
  httpGet,
  getElement,
  pow_barmak
};