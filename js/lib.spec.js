 describe('sum', () => {
  it('перевірка на додавання позитивних та негативних чисел', () => {
    assert.equal(sum(2, -3), -1);
    assert.equal(sum(2, -3), -1);
    assert.equal(sum(-2, -3), -5);
    assert.equal(sum(-2, 3), 1);
    assert.equal(sum(0, 0), 0);
  });
  it('первірка функції додвання, якщо число буде строкою', () => {
    assert.equal(sum('2', '-3'), -1);
    assert.equal(sum('-2', '3'), 1);
    assert.equal(sum('0', 0), 0);
    assert.equal(sum('4', 0), 4);
  });
  it('первірка функції додвання, якщо числа бдуть з плаваючою крапкою', () => {
    assert.equal(sum('2.6', '2.4'), 5);
    assert.equal(sum('-2.6', 1.1), -1.5);
    assert.equal(sum('-1.1', -1.1), -2.2);
  });
});

describe('pow', () => {
  it('піднесення до додатного степеня', () => {
    assert.equal(pow(2, 3), 8);
    assert.equal(pow(5, 2), 25);
    assert.equal(pow(3, 1), 3);
    assert.equal(pow(10, 4), 10000);
  });

  it('піднесення до нульового степеня', () => {
    assert.equal(pow(2, 0), 1);
    assert.equal(pow(-3, 0), 1);
    assert.equal(pow(0, 0), 1); // за замовчуванням в JS 0**0 = 1
  });

  it('піднесення від’ємних чисел до додатного степеня', () => {
    assert.equal(pow(-2, 1), -2);
    assert.equal(pow(-2, 2), 4);
    assert.equal(pow(-2, 3), -8);
    assert.equal(pow(-3, 4), 81);
  });

  it('піднесення до від’ємного степеня', () => {
    assert.equal(pow(2, -2), 0.25);
    assert.equal(pow(2, -3), 0.125);
    assert.equal(pow(-2, -3), -0.125);
    assert.equal(pow(-2, -2), 0.25);
  });

  it('перевірка для нуля', () => {
    assert.equal(pow(0, 1), 0);
    assert.equal(pow(0, 5), 0);
  });

  it('числа передані як строки', () => {
    assert.equal(pow('2', '3'), 8);
    assert.equal(pow('5', '2'), 25);
    assert.equal(pow('-2', '3'), -8);
    assert.equal(pow('-2', '-2'), 0.25);
  });

  it('великі степені', () => {
    assert.equal(pow(2, 10), 1024);
    assert.equal(pow(10, 6), 1000000);
  });

  it('граничні випадки', () => {
    assert.equal(pow(1, 1000), 1);
    assert.equal(pow(-1, 999), -1);
    assert.equal(pow(-1, 1000), 1);
  });
});


describe('factorial', () => {
  it('обчислення факторіала додатних чисел', () => {
    assert.equal(factorial(1), 1);    
    assert.equal(factorial(2), 2);     
    assert.equal(factorial(3), 6);     
    assert.equal(factorial(4), 24);    
    assert.equal(factorial(5), 120);   
  });

  it('перевірка великих чисел', () => {
    assert.equal(factorial(10), 3628800);
    assert.equal(factorial(12), 479001600);
  });

  it('повинна повертати 1 при n = 0 або n = 1', () => {
    assert.equal(factorial(0), 1);
    assert.equal(factorial(1), 1);
  });


describe('fibonacci', () => {

  it('повертає правильні значення для перших чисел ряду Фібоначчі', () => {
    assert.equal(fibonacci(1), 1);
    assert.equal(fibonacci(2), 1); 
    assert.equal(fibonacci(3), 2);
    assert.equal(fibonacci(4), 3);
    assert.equal(fibonacci(5), 5);
    assert.equal(fibonacci(6), 8);
    assert.equal(fibonacci(7), 13);
    assert.equal(fibonacci(8), 21);
  });

  it('перевірка великих чисел ряду', () => {
    assert.equal(fibonacci(10), 55);
    assert.equal(fibonacci(12), 144);
  });

  it('перевірка граничних випадків', () => {
    assert.equal(fibonacci(1), 1);
    assert.equal(fibonacci(2), 1);
  });

  // it('перевірка типів аргументів — рядки з числами', () => {  
  //   assert.throws(() => fibonacci('5'), 5);
  // });
});

describe('removeByName', () => {
  it('повинен видалити існуючий елемент з масиву', () => {
    assert.deepEqual(removeByName(['Alice', 'Bob', 'Charlie'], 'Bob'), ['Alice', 'Charlie']);
  });

  it('повинен видалити лише перше входження, якщо елемент повторюється', () => {
    assert.deepEqual(removeByName(['Anna', 'Bob', 'Anna', 'Charlie'], 'Anna'), ['Bob', 'Anna', 'Charlie']);
  });

  it('повинен повернути масив без змін, якщо елемент не знайдено', () => {
    assert.deepEqual(removeByName(['Alice', 'Bob'], 'Eve'), ['Alice', 'Bob']);
  });

  it('повинен коректно працювати з порожнім масивом', () => {
    assert.deepEqual(removeByName([], 'Bob'), []);
  });

  it('повинен бути нечутливим до типів, тобто рядок "5" ≠ число 5', () => {
    assert.deepEqual(removeByName(['5', '10'], 5), ['5', '10']);
  });

  it('повинен повертати новий масив, не змінюючи оригінальний', () => {
    const list = ['Alice', 'Bob', 'Charlie'];
    const result = removeByName(list, 'Bob');
    assert.deepEqual(result, ['Alice', 'Charlie']);
    assert.deepEqual(list, ['Alice', 'Bob', 'Charlie']);
  });

  it('повинен коректно працювати, якщо елемент — порожній рядок', () => {
    assert.deepEqual(removeByName(['', 'Bob', 'Alice'], ''), ['Bob', 'Alice']);
  });

  it('повинен видаляти елемент, навіть якщо він стоїть першим', () => {
    assert.deepEqual(removeByName(['Target', 'Alice', 'Bob'], 'Target'), ['Alice', 'Bob']);
  });

  it('повинен видаляти елемент, навіть якщо він останній', () => {
    assert.deepEqual(removeByName(['Alice', 'Bob', 'Target'], 'Target'), ['Alice', 'Bob']);
  });

  it('повинен коректно працювати, якщо масив має лише один елемент', () => {
    assert.deepEqual(removeByName(['Bob'], 'Bob'), []);
    assert.deepEqual(removeByName(['Bob'], 'Alice'), ['Bob']);
  });
});


describe('makeCounter', () => {

  it('повинен створювати лічильник, що починається з переданого значення', () => {
    const counter = makeCounter(5);
    assert.equal(counter(), 5);
    assert.equal(counter(), 6);
    assert.equal(counter(), 7);
  });

  it('кожен новий лічильник має власний незалежний стан', () => {
    const counterA = makeCounter(0);
    const counterB = makeCounter(10);

    assert.equal(counterA(), 0);
    assert.equal(counterA(), 1);
    assert.equal(counterB(), 10);
    assert.equal(counterB(), 11);
    assert.equal(counterA(), 2);
  });

  it('повинен працювати навіть з від’ємним початковим значенням', () => {
    const counter = makeCounter(-3);
    assert.equal(counter(), -3);
    assert.equal(counter(), -2);
    assert.equal(counter(), -1);
  });

  it('повинен працювати з нульовим початковим значенням', () => {
    const counter = makeCounter(0);
    assert.equal(counter(), 0);
    assert.equal(counter(), 1);
  });

  it('повинен повертати число при кожному виклику', () => {
    const counter = makeCounter(2);
    assert.strictEqual(typeof counter(), 'number');
    assert.strictEqual(typeof counter(), 'number');
  });

  it('повинен не змінювати початковий аргумент після створення нового лічильника', () => {
    let start = 5;
    const counter = makeCounter(start);
    counter();
    counter();
    assert.equal(start, 5); // змінна "start" не змінюється
  });

  it('повинен інкрементувати значення на 1 при кожному виклику', () => {
    const counter = makeCounter(100);
    assert.equal(counter(), 100);
    assert.equal(counter(), 101);
    assert.equal(counter(), 102);
  });

  it('повинен зберігати стан між викликами (через замикання)', () => {
    const counter = makeCounter(3);
    counter(); // 3
    counter(); // 4
    assert.equal(counter(), 5); // підтвердження, що стан зберігається
  });

});




describe('getAsyncTimerId', () => {

  it('повинен повертати Promise', () => {
    const result = getAsyncTimerId(100);
    assert.ok(result instanceof Promise);
  });

  it('повинен повертати число (Unix час у секундах)', async () => {
    const id = await getAsyncTimerId(50);
    assert.strictEqual(typeof id, 'number');
  });



  it('повинен виконуватися приблизно після заданого часу', async function() {
    this.timeout(2000); // дозволяємо тесту працювати трохи довше

    const start = Date.now();
    await getAsyncTimerId(500);
    const end = Date.now();

    const elapsed = end - start;
    assert.ok(elapsed >= 500, `Очікувалось >= 500мс, отримано ${elapsed}мс`);
  });

  it('повинен працювати навіть із нульовою затримкою', async () => {
    const id = await getAsyncTimerId(0);
    assert.strictEqual(typeof id, 'number');
  });

  it('повинен повертати різні значення при різних запусках у часі', async () => {
    const id1 = await getAsyncTimerId(10);
    await new Promise(r => setTimeout(r, 1100)); // чекаємо ~1 секунду
    const id2 = await getAsyncTimerId(10);

    assert.notStrictEqual(id1, id2); // Unix-час має змінитися
  });

  it('повинен коректно працювати при великих затримках (наприклад, 1 секунда)', async function() {
    this.timeout(3000);
    const id = await getAsyncTimerId(1000);
    assert.strictEqual(typeof id, 'number');
  });

});

describe('asyncMultiply', () => {

  it('повинна повертати Promise', () => {
    const result = asyncMultiply(5);
    assert.ok(result instanceof Promise);
  });

  it('повинна повертати подвоєне число після виконання', async function() {
    this.timeout(4000);
    const result = await asyncMultiply(4);
    assert.strictEqual(result, 8);
  });

  it('повинна повертати 0, якщо передано 0', async function() {
    this.timeout(4000);
    const result = await asyncMultiply(0);
    assert.strictEqual(result, 0);
  });

  it('повинна повертати від’ємне значення, якщо вхідне число від’ємне', async function() {
    this.timeout(4000);
    const result = await asyncMultiply(-3);
    assert.strictEqual(result, -6);
  });

  it('повинна повертати правильне значення для чисел із плаваючою крапкою', async function() {
    this.timeout(4000);
    const result = await asyncMultiply(2.5);
    assert.strictEqual(result, 5);
  });

});

describe('httpGet', () => {
  let xhr;
  let requests;

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function (req) {
      requests.push(req);
    };
  });

  afterEach(() => {
    xhr.restore();
  });

  it('повинна повертати Promise', () => {
    const result = httpGet('/api/data');
    expect(result).to.be.instanceOf(Promise);
  });

  it('повинна виконуватись успішно при статусі 200', async () => {
    const promise = httpGet('/api/success');
    requests[0].respond(200, { "Content-Type": "application/json" }, '{"msg":"OK"}');

    const response = await promise;
    expect(response).to.equal('{"msg":"OK"}');
  });

  it('повинна відхилятись при статусі 404', async () => {
    const promise = httpGet('/api/notfound');
    requests[0].respond(404, { "Content-Type": "text/plain" }, 'Not Found');

    try {
      await promise;
      throw new Error('Очікувалось відхилення');
    } catch (err) {
      expect(err).to.be.instanceOf(Error);
      expect(err.code).to.equal(404);
    }
  });

  it('повинна відхилятись при мережевій помилці', async () => {
    const promise = httpGet('/api/fail');
    requests[0].error(); // Імітація мережевої помилки

    try {
      await promise;
      throw new Error('Очікувалось відхилення');
    } catch (err) {
      expect(err.message).to.equal('Network Error');
    }
  });

  it('повинна викликати xhr.open з правильними параметрами', () => {
    httpGet('/api/check');
    const req = requests[0];
    expect(req.method).to.equal('GET');
    expect(req.url).to.equal('/api/check');
  });
  describe('getElement(array, index, fallback)', () => {
  const arr = ['a', 'b', 'c', 'd', 'e']; // [0, 1, 2, 3, 4]

  it('повертає елемент за позитивним індексом', () => {
    expect(getElement(arr, 0)).to.equal('a');
    expect(getElement(arr, 2)).to.equal('c');
    expect(getElement(arr, 4)).to.equal('e');
  });

  it('підтримує негативні індекси (від кінця масиву)', () => {
    expect(getElement(arr, -1)).to.equal('e');
    expect(getElement(arr, -3)).to.equal('c');
    expect(getElement(arr, -5)).to.equal('a');
  });

  it('повертає fallback, коли індекс виходить за межі масиву', () => {
    expect(getElement(arr, 10)).to.be.null;                 // за праву межу
    expect(getElement(arr, -10)).to.be.null;                // за ліву межу
    expect(getElement(arr, 5, 'oops')).to.equal('oops');
    expect(getElement(arr, -6, 123)).to.equal(123);
  });

  it('повертає fallback за замовчуванням (null), якщо не передано третій параметр', () => {
    expect(getElement(arr, 999)).to.be.null;
    expect(getElement(arr, -999)).to.be.null;
  });

  it('кидає TypeError, якщо перший параметр не масив', () => {
    const badValues = [null, undefined, 123, 'string', {}, () => {}];

    badValues.forEach(value => {
      expect(() => getElement(value, 0)).to.throw(TypeError, /масивом/);
    });
  });

  it('кидає TypeError, якщо індекс не є числом або NaN', () => {
    const badIndices = [null, undefined, '5', [], {}, NaN];

    badIndices.forEach(idx => {
      expect(() => getElement(arr, idx)).to.throw(TypeError, /числом/);
    });

    // Але нормальні числа (включаючи +0, -0, Infinity) — дозволені
    expect(() => getElement(arr, Infinity)).to.not.throw();
    expect(getElement(arr, Infinity)).to.be.null;
    expect(getElement(arr, -Infinity)).to.be.null;
  });

  it('коректно працює з порожнім масивом', () => {
    const empty = [];
    expect(getElement(empty, 0)).to.be.null;
    expect(getElement(empty, -1)).to.be.null;
    expect(getElement(empty, 0, 'fallback')).to.equal('fallback');
  });

  it('повертає undefined, NaN, false тощо, якщо вони є в масиві (не плутає з fallback)', () => {
    const weird = [undefined, null, false, 0, '', NaN];
    expect(getElement(weird, 0)).to.be.undefined;
    expect(getElement(weird, 1)).to.be.null;
    expect(getElement(weird, 2)).to.be.false;
    expect(getElement(weird, 5)).to.be.NaN;
  });

  // Додатковий крайній випадок — дуже великі/малі індекси
  it('працює з дуже великими або дуже малими індексами', () => {
    expect(getElement(arr, 1e10)).to.be.null;
    expect(getElement(arr, -1e10)).to.be.null;
    expect(getElement(arr, Number.MAX_SAFE_INTEGER)).to.be.null;
  });
});
});
});  
describe('getElement(array, index, fallback)', () => {
  const arr = ['a', 'b', 'c', 'd', 'e']; // [0, 1, 2, 3, 4]

  it('повертає елемент за позитивним індексом', () => {
    expect(getElement(arr, 0)).to.equal('a');
    expect(getElement(arr, 2)).to.equal('c');
    expect(getElement(arr, 4)).to.equal('e');
  });

  it('підтримує негативні індекси (від кінця масиву)', () => {
    expect(getElement(arr, -1)).to.equal('e');
    expect(getElement(arr, -3)).to.equal('c');
    expect(getElement(arr, -5)).to.equal('a');
  });

  it('повертає fallback, коли індекс виходить за межі масиву', () => {
    expect(getElement(arr, 10)).to.be.null;                 // за праву межу
    expect(getElement(arr, -10)).to.be.null;                // за ліву межу
    expect(getElement(arr, 5, 'oops')).to.equal('oops');
    expect(getElement(arr, -6, 123)).to.equal(123);
  });

  it('повертає fallback за замовчуванням (null), якщо не передано третій параметр', () => {
    expect(getElement(arr, 999)).to.be.null;
    expect(getElement(arr, -999)).to.be.null;
  });

  it('кидає TypeError, якщо перший параметр не масив', () => {
    const badValues = [null, undefined, 123, 'string', {}, () => {}];

    badValues.forEach(value => {
      expect(() => getElement(value, 0)).to.throw(TypeError, /масивом/);
    });
  });

  it('кидає TypeError, якщо індекс не є числом або NaN', () => {
    const badIndices = [null, undefined, '5', [], {}, NaN];

    badIndices.forEach(idx => {
      expect(() => getElement(arr, idx)).to.throw(TypeError, /числом/);
    });

    // Але нормальні числа (включаючи +0, -0, Infinity) — дозволені
    expect(() => getElement(arr, Infinity)).to.not.throw();
    expect(getElement(arr, Infinity)).to.be.null;
    expect(getElement(arr, -Infinity)).to.be.null;
  });

  it('коректно працює з порожнім масивом', () => {
    const empty = [];
    expect(getElement(empty, 0)).to.be.null;
    expect(getElement(empty, -1)).to.be.null;
    expect(getElement(empty, 0, 'fallback')).to.equal('fallback');
  });

  it('повертає undefined, NaN, false тощо, якщо вони є в масиві (не плутає з fallback)', () => {
    const weird = [undefined, null, false, 0, '', NaN];
    expect(getElement(weird, 0)).to.be.undefined;
    expect(getElement(weird, 1)).to.be.null;
    expect(getElement(weird, 2)).to.be.false;
    expect(getElement(weird, 5)).to.be.NaN;
  });

  // Додатковий крайній випадок — дуже великі/малі індекси
  it('працює з дуже великими або дуже малими індексами', () => {
    expect(getElement(arr, 1e10)).to.be.null;
    expect(getElement(arr, -1e10)).to.be.null;
    expect(getElement(arr, Number.MAX_SAFE_INTEGER)).to.be.null;
  });
});
describe('Test suite for getElement function', () => {
  
  it('повертає перший елемент масиву', () => {
    expect(getElement([10, 20, 30], 0)).to.equal(10);
  });

  it('повертає останній елемент масиву', () => {
    expect(getElement([10, 20, 30], 2)).to.equal(30);
  });

  it('підтримує негативний індекс -1 (останній елемент)', () => {
    expect(getElement([10, 20, 30], -1)).to.equal(30);
  });

  it('підтримує негативний індекс -2 (передостанній елемент)', () => {
    expect(getElement([10, 20, 30], -2)).to.equal(20);
  });

  
  it('повертає fallback якщо індекс > довжини масиву', () => {
    expect(getElement([10, 20, 30], 5, 'fallback')).to.equal('fallback');
  });

  it('повертає fallback якщо індекс < -довжини масиву', () => {
    expect(getElement([10, 20, 30], -4, 'fallback')).to.equal('fallback');
  });

  it('повертає fallback для порожнього масиву', () => {
    expect(getElement([], 0, 'empty')).to.equal('empty');
  });

  
  it('масив з одним елементом, індекс 0', () => {
    expect(getElement([1], 0)).to.equal(1);
  });

  it('масив з одним елементом, індекс -1', () => {
    expect(getElement([1], -1)).to.equal(1);
  });

  it('масив з одним елементом, індекс за межами', () => {
    expect(getElement([1], 1, 'fallback')).to.equal('fallback');
  });

  
  it('кидає помилку якщо перший параметр не масив', () => {
    expect(() => getElement('not array', 0)).to.throw("Перший параметр має бути масивом");
  });

  it('кидає помилку якщо індекс не число', () => {
    expect(() => getElement([1, 2, 3], '1')).to.throw("Індекс має бути числом");
  });

  it('кидає помилку якщо індекс NaN', () => {
    expect(() => getElement([1, 2, 3], NaN)).to.throw("Індекс має бути числом");
  });

  
  it('повертає null за замовчуванням якщо індекс некоректний', () => {
    expect(getElement([1, 2, 3], 10)).to.equal(null);
  });

  it('повертає заданий fallback (число)', () => {
    expect(getElement([1, 2, 3], 10, 999)).to.equal(999);
  });
});
      describe('Pow_barmak', () => {
  it('повинен підносити число до додатного степеня', () => {
    assert.equal(pow_barmak(2, 3), 8);
    assert.equal(pow_barmak(5, 2), 25);
  });

  it('повинен підносити число до нульового степеня', () => {
    assert.equal(pow_barmak(2, 0), 1);
    assert.equal(pow_barmak(-3, 0), 1);
  });
});