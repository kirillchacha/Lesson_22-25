// Теорія та лекційна робота
"use strict"

console.log(`Теорія та лекційна робота №22`);
console.log(` `);
console.log(`Привіт, я вчу JS`);
console.log(` `);

// Змінні та Константи

console.log(` `);
console.log(`Змінні:`);
console.log(` `);
let latin = `Рекомендовано`;

let userAge = 22;
console.log(`Мені ` + userAge + ` роки`);
let userAge2;
console.log(userAge2);

userAge2 = userAge;
console.log(userAge2);
console.log(` `);

//Область видимості

console.log(` `);
console.log(`Область видимості:`);
console.log(` `);
userAge = 19;
console.log(`за межами блоку: ` + userAge);
// за межами блоку
if (1 > 0) {
	let userAge = 33;
	console.log(`межі блоку: ` + userAge);
	if (10>7) {
		let userAge = 40;
		console.log(`межі блоку: ` + userAge);
	}
}
// за межами блоку
console.log(`за межами блоку: ` + userAge);
console.log(` `);

// Константи

console.log(` `);
console.log(`Константи:`);
console.log(` `);
const COLOR_GREY = '#424551';
console.log(COLOR_GREY);
console.log(` `);

//Типи Даних

console.log(` `);
console.log(`ТИПИ ДАНИХ:`);
console.log(` `);
let userAge3;
console.log(`Типи Даних: ` + typeof userAge3); //undefined
console.log(` `);
let userAge4 =null;
console.log(`Типи Даних: ` + typeof userAge4); 
console.log(`Типи Даних: ` + userAge4);
console.log(` `);
let userAge5 = 0;
console.log(`Типи Даних: ` + typeof userAge5);
console.log(`Значення: ` + userAge5);
console.log(` `);
let result = 22 / 0;
console.log(`Значення: ` + result);
console.log(` `);
let result2 = "Кирилл" * 22;
console.log(`Значення: ` + result2);
console.log(` `);
let myName = 'Кирилл';
console.log(`Типи Даних: ` + typeof myName);
console.log(`Значення: ` + myName);
console.log(` `);
userAge = 22;

const myInfo = `Моє Ім'я: ${myName}, та мій Вік: ${userAge}`;
console.log(myInfo);
console.log(` `);
userAge2 = "13";
console.log(`Типи Даних: ${typeof userAge2}`);
console.log(`Значення: ${userAge2}`);
console.log(` `);
console.log(`Об'єднання 2-х значень: ` + userAge + userAge2);
const someVar = 2;
console.log(`Значення: ${typeof someVar}`);
console.log(`Значення: ${someVar}`);
console.log(` `);

// Примусове переведення Типи Даних, яке змінює значення

console.log(``);
console.log(`Примусове переведення Типи Даних:`);
console.log(``);
console.log(`number: ${Number(myName)}`);
console.log(`string: ${String(userAge5)}`);
console.log(`boolean: ` + Boolean(someVar));
console.log(``);
console.log(``);
console.log(``);

//Домашне завдання:

console.log(`Домашне завдання:`);
console.log(`Тема відео: Основи синтаксису JAVASCRIPT. Структура коду. Інструкції. Режим use strict. Уроки JAVASCRIPT з нуля.`);
console.log(``);
console.log(``);
console.log(`Теорія:`);
console.log(``);
console.log(`Приклад Літералов:`);
console.log(``);
let literals = 25;
console.log(`Літерали цілого числа: ${literals}`);
let literals2 = 25.3;
console.log(`Літерали дробного числа: ${literals2}`);
let literals3 = `'JavaScript' and "JavaScript"`;
console.log(`Літерали строки: ${literals3}`);
let literals4 = `[] and [24, 54, 12]`;
console.log(`Літерали масива: ${literals4}`);
let literals5 = `{} and {
							name: 'Фрілансер',
							surname: 'по життю'
						 }`;
console.log(`Літерали об'єкта: ${literals5}`);
let literals6 = '(ab|bc)';
console.log(`Літерали регулярного виразу: ${literals6}`);
console.log(``);
console.log(``);
console.log(`Домашка:`);
console.log(``);
console.log(`Завдання: Яке з варіантів викличе помилку (1; 2; 3; 4.)`);
console.log(`На мою думку, викличе помилку 3 та 4-й варіант. В першому та другому варіанті в кінці пропустили ";"`);
console.log(``);
console.log(``);
console.log(`Тема відео: Змінні в JAVASCRIPT. Константи. Ключові слова LET CONST VAR. Уроки JAVASCRIPT з нуля 2020`);
console.log(``);
console.log(``);
console.log(`Теорія:`);
console.log(``);
console.log(`Об'явленяя змінних:`);
console.log(`Вірно Об'явленні:`);
console.log(``);
let age;
let info321;
let $size;
let _color;
console.log(`let age;
let info321;
let $size;
let _color;`);
console.log(``);
console.log(`Не вірно Об'явленні:`);
console.log(``);
console.log(`let 132info;
let my-age;`);
console.log(``);
console.log(``);
console.log(`Домашка:`);
console.log(``);
console.log(`Завдання: Який або яка з Варіантів не вірні`);
console.log(`1,2 та 3 Варіанти не вірні`);
console.log(`1-й варіант не вірний тому що, там повинно бути зворотні кавичкі`);
console.log(`2-й варіант не вірний, тому що значення буде infinity. А не NaN`);
console.log(`3-й варіант не вірний, тому що буде undefined`);
console.log(`Тількт 4-й варіант вірний, там при діленні string переведе на number`);
console.log(``);
console.log(``);

// Теорія та лекційна робота

console.log(``);
console.log(`Теорія та лекційна робота №23`);
console.log(``);

// Основні методи рядків
// Довжина рядка Length
// Рядок це масив

console.log(`Основні методи рядків:`);
console.log(``);
let someString = `Усім привіт! Як справи?`;
console.log(someString[0]);
console.log('Великий регістр: ' + someString.toUpperCase()); // Великий регістр
console.log(`Маленький регістр: ${someString.toLowerCase()}`); // Маленький регістр
console.log(``);

// Пошук

console.log(`Пошук:`);
console.log(``);
console.log(`includes: ${someString.includes('і')}`);
console.log(`або`);
let someStringLower = someString.toLowerCase();
console.log(`Пошук по буквам чи слову: ${someStringLower.includes('усім')}`);
console.log(``);
console.log(`Отримання частини рядка, методом slice(start and end)`);
console.log(``);
let someNewString = someString.slice(0, 7);
console.log(`Отримання частини рядка: ${someNewString}`);
console.log(``);

// Пошук та заміна

console.log(`Пошук та заміна`);
console.log(``);
someString = `Добре, а як у тебе?`;
console.log(`Пошук: ${someString}`);
someString = someString.replace('тебе', 'вас');
console.log(`Заміна: ${someString}`);
console.log(``);

// Основні методи чисел
// Math.floor - Округлення в меньшу сторону

console.log(``);
console.log(`Основні методи чисел`);
let someNum = 20;
let someNotRoundNum = 25.7;
console.log(``);
console.log(`Округлення в меньшу сторону: ${Math.floor(someNotRoundNum)}`);
someNotRoundNum = 25.2;
console.log(`Округлення в більшу сторону: ${Math.ceil(someNotRoundNum)}`);
someNotRoundNum = 25.5;
console.log(`Округлення до ближньго цілого: ${Math.round(someNotRoundNum)}`);
someNotRoundNum = -25.7;
console.log(`Модуль числа: ${Math.abs(someNotRoundNum)}`);
console.log(`Рандомні числа: ${Math.random()}`);
console.log(`Максимальні числа: ${Math.max(5, 20, -43)} та мінімальні числа: ${Math.min(5, 20, -43)}`);
console.log(``);
let someVar2 = 143.34;
console.log(`Парсимо: ${parseInt(someVar2)}`);
console.log(`Парсимо: ${parseFloat(someVar2)}`);
console.log(``);
someVar2 = `143.34`;
console.log(`Типи даних: ${typeof someVar2}`);
someNum = parseInt(someVar2);
console.log(`Типи даних: ${typeof someNum}`);
console.log(`Парсимо рядок: ${someNum}`);
someNum = parseFloat(someVar2);
console.log(`Парсимо рядок: ${someNum}`);
console.log(``);
console.log(``);

// Оператори

console.log(`Оператори`);
let varOne = "13";
let varTwo = "7";
console.log(``);
console.log(`Оператор Мінус: '-'`);
let varSumm = varOne - varTwo;
console.log(`Відповідь: ${varOne} - ${varTwo} = ${varSumm}`);
console.log(`При string буде фактично автаматично змінено тип даних. Якщо окрім числа в тип даних string буде якийсь текст, то це обчислити не можливо`);
console.log(``);
console.log(`Оператор Ділення: '/'`);
varSumm = varOne / varTwo;
console.log(`Відповідь: ${varOne} / ${varTwo} = ${varSumm}`);
console.log(`Оператор % або залишок від ділення`);
varSumm = varOne % varTwo;
console.log(`Залишок: ${varSumm}`);
console.log(``);
console.log(`Оператор Множення: '*'`);
varSumm = varOne * varTwo;
console.log(`Відповідь: ${varOne} * ${varTwo} = ${varSumm}`);
console.log(``);
console.log(`Оператор Додавання: '+'`);
varSumm = varOne + varTwo;
console.log(`Відповідь: ${varOne} + ${varTwo} = ${varSumm}`);
console.log(``);
console.log(`Унарний Оператор Додавання:`);
someNum = "7";
result = +someNum;
console.log(result);
console.log(``);

// Інкремент / декремент

console.log(`Інкремент / декремент:`);
someNum = 6;
result = someNum
console.log(`++${someNum} = ${++result}`);
someNum = 6;
result = someNum
console.log(`--${someNum} = ${--result}`);
console.log(``);

// Приорітетність операторів

let results = 4 + 8 * 15 / +"8";
console.log(results);
console.log(``);

// оператори порівняння
// < > = == === != !==

console.log(`оператори порівняння:`);
console.log(`< > = == === != !==`);
varOne = 18;
varTwo = 4;
varSumm = varOne > varTwo;
result = varSumm;
console.log(`${varOne} > ${varTwo} : ${result}`);
varOne = 18;
varTwo = 44;
varSumm = varOne < varTwo;
result = varSumm;
console.log(`${varOne} < ${varTwo} : ${result}`);
varOne = 20;
varTwo = 19;
varSumm = varOne == varTwo;
result = varSumm;
console.log(`${varOne} == ${varTwo} : ${result}`);
varOne = 20;
varTwo = 19;
varSumm = varOne != varTwo;
result = varSumm;
console.log(`${varOne} != ${varTwo} : ${result}`);
varOne = 5;
varTwo = 5;
varSumm = varOne <= varTwo;
result = varSumm;
console.log(`${varOne} <= ${varTwo} : ${result}`);
varOne = 7;
varTwo = 5;
varSumm = varOne >= varTwo;
result = varSumm;
console.log(`${varOne} >= ${varTwo} : ${result}`);
console.log(``);
console.log(`оператор присвоєння: '=' вже знайоме: let someNum = 8;`);
console.log(``);
varOne = 7;
varTwo = "5";
varSumm = varOne === varTwo;
result = varSumm;
console.log(`${varOne} === ${varTwo} : ${result}`);
varOne = 7;
varTwo = "5";
varSumm = varOne !== varTwo;
result = varSumm;
console.log(`${varOne} !== ${varTwo} : ${result}`);

// Логічні оператори

console.log(``);
console.log(`Логічні оператори:`);
result = !0;
console.log(`Оператор Ні: ${result}. Він змінює значення на протилежне`);
varOne = 14;
varTwo = 17;
varSumm = varOne || varTwo;
console.log(`Boolean: ` + Boolean(varSumm));
console.log(`Оператор "або ||": ${varOne} || ${varTwo} : ${varSumm}`);
varOne = 14;
varTwo = 0;
varSumm = varOne && varTwo;
console.log(`Boolean: ` + Boolean(varSumm));
console.log(`Оператор "та &&": ${varOne} && ${varTwo} : ${varSumm}`);
console.log(``);

// Умовне вітвлення

console.log(``);
console.log(`Умовне вітвлення:`);
console.log(``);
varOne = 32;
varTwo = 37;
console.log(`if( умова ) {
				Тут код. Він виконається, якщо умова вертає true
			} `);
if(varOne < varTwo) {
	let result = varOne + varTwo;
	console.log(result);
}
console.log(``);
console.log(`Або`);
console.log(`if( умова ) {

	Тут код. Він виконається, якщо умова вертає true

}else {

	Тут код. Він виконається, якщо умова вертає false

}
...Тут може ще бути продовження коду`);
if(varOne > varTwo) {
	let result = varOne + varTwo;
	console.log(result);
}else {
	let result = varOne - varTwo;
	console.log(result);
}
console.log(``);
console.log(`Або`);
console.log(`if( умова ) {

	Тут код. Він виконається, якщо умова вертає true

}else if( умова #2 ) {

	Тут код. Він виконається, якщо умова #2 вертає true

}
}else {

	Тут код. Він виконається, якщо усі умови вертає false

}
...Тут може ще бути продовження коду`);
if(varOne > varTwo) {
	let result = varOne + varTwo;
	console.log(`#1`);
	console.log(result);
}else if(varOne === varTwo) {
	let result = varOne - varTwo;
	console.log(`#2`);
	console.log(result);
}else {
	let result = varOne * varTwo;
	console.log(`else`);
	console.log(result);
}
console.log(``);
console.log(`if( varOne ) { // Чи varOne верне true
	Тут код. Він виконається, якщо умова вертає true
}`);
varOne = 4;
if(varOne) {
	console.log(`varOne is true`);
}
console.log(``);
console.log(`Складна умова:`);
varOne = 2;
varTwo = 3;
let varThree = 4;
let varFour = 5;

if(varOne > 3 || varTwo === 5 && varThree < 7 || varFour > 10) {
	console.log(`Умова виконається`);
} else {
	console.log(`Щось пішло не так!!`);
}
console.log(``);
console.log(`if( varOne > 3 || varTwo === 5 && varThree < 7 || varFour > 10 ) { // Перша умова буде виконуватися "та &&". То біж  varTwo === 5 && varThree < 7. varTwo === 5 зараз не дорівнює 5-ти. А потім виконується "або ||". Тому умова не виконається буде false
	
}`);
console.log(``);
varOne = "2";
if(varOne.length === 1) {
	console.log('True');
}
console.log(``);

// Цикл For

console.log(``);
someString = "Доброго вам дня!";
console.log(`без Цикла For: ${someString[0]}
			   ${someString[1]}
			   ${someString[2]}
			   ${someString[3]}
			   ${someString[4]}
			   ${someString[5]}
			   ${someString[6]}
			   ${someString[7]}
			   ${someString[8]}
			   ${someString[9]}
			   ${someString[10]}
			   ${someString[11]}
			   ${someString[12]}
			   ${someString[13]}
			   ${someString[14]}
			   ${someString[15]}`);
console.log(``);
console.log(`Цикл For:`);
console.log(``);
console.log(`Синтаксис: for( Початок; умова закінчення; крок ){
	Код виконується, на кожному колі циклу
}`);
console.log(`К-сть символів: ${someString.length}`);
for(let i =  0; i < someString.length; ++i) {
	console.log(`${someString[i]} - ${i}`);
}
console.log(``);
console.log(`Оператор умови "?"`);
let someVar3 = 11 > 7 ? "11 більше 7" : "11 меньше 7"
console.log(someVar3);
console.log(``);

//Домашне завдання:

console.log(``);
console.log(``);
console.log(`Домашне завдання:`);
console.log(`Тема відео: Оператори JAVASCRIPT. "2"+2=22. Уроки JAVASCRIPT з нуля 2020`);
console.log(``);
console.log(`Теорія:`);
console.log(``);
console.log(`Оператор возведение в степень "**"`);
someNum = 16 ** 3;
console.log(`Відповідь: 16^3 = ${someNum}`);
console.log(``);
console.log(`Скороченая запись обчислення присвоєння`);
console.log(``);
result = 8;
results = result + 3;
console.log(`${result} + 3 = ${results}`);
results = result * 4;
console.log(`${result} * 4 = ${results}`);
console.log(``);
console.log(`Або`);
console.log(``);
result = 15;
console.log(result);
result += 12;
console.log(result);
result *= 6;
console.log(result);
console.log(``);
result = 3;
console.log(result);
result += 4 + 12;
console.log(result);
console.log(``);
console.log(`Оператор "коми ','"`);
varSumm = (4 + 10, 14 + 3);
console.log(varSumm);
console.log(``);
console.log(`Порівняння рядків:`);
console.log(``);
console.log(`Алфавітний порядок:`);
console.log('Б' > 'А');
console.log('Скрипт' > 'Скрипач');
console.log(``);
console.log(`К-сть символів:`);
console.log('Слайдер' > 'Слайд');
console.log(``);
console.log(`Регістр`);
console.log('Фрилансер' > 'фрилансер');
console.log(``);
console.log(``);
console.log(`Домашка:`);
console.log(``);
console.log(`1-й Варіант: Не вірно. Тому що, буде об'єднання тільки змінеться оператор в вивидеться: 35-22
2-й Варіант: Вірно. При множенні, якщо у string буде записано в лабках цифра воно переводить в тип даних number, та буде 770
3-й Варіант: Не вірно. Не коректний запис, викличе помилку: Uncaught SyntaxError: Invalid left-hand side expression in postfix operation
4-й Варіант: Не вірно. Запис Інкремент usersCounter++ постфіксний. буде 0.
5-й Варіант: Одночасно Вірно та Не вірно. Буде 11, по пріорітетності буде оператор "та", а з двох значень верне друге
6-й Варіант: Повернеться 0`);
console.log(``);
console.log(``);
console.log(`Тема відео: IF ELSE у JAVASCRIPT. Умовний оператор "?". Приклади IF ELSE. Уроки JAVASCRIPT з нуля 2020`);
console.log(``);
console.log(`Домашка:`);
console.log(``);
console.log(`1-й Варіант: Не вірно. Строга рівність операнди, тому буде ложь.
2-й Варіант: Вірно. Буде Істина
3-й Варіант: Вірно. Буде Істина
4-й Варіант: Вірно. Буде Істина`);
console.log(``);
console.log(``);
console.log(`Тема відео: Цикли FOR і WHILE у JavaScript. Директиви break і continue. Уроки JAVASCRIPT з нуля 2020`);
console.log(``);
console.log(`Теорія:`);
console.log(``);
console.log(`Синтаксис: while( умова ){
	Код виконується, на кожному колі циклу
}`);
console.log(``);
console.log(`Приклад:`);
let num = 0;
while (num < 6) {
	console.log(num);
	num++;
}
console.log(``);
console.log(`Або`);
console.log(``);
num = 5;
while (num) {
	console.log(num);
	num--;
}
console.log(``);
console.log(`Конструкція: DO...WHILE`);
num = 0;
do {
	console.log(num);
	num++;
} while (num < 4);
console.log(``);
console.log(`Директива break`);
num = 0;
for (; num < 6; num++) {
	console.log(num);
	if (num == 2) break;
}
console.log(`Праця закінчена, num = ${num}`);
console.log(``);
console.log(`Директива continue`);
num = 0;
for (; num < 6; num++) {
	if (num == 0) continue;
	console.log(num);
}
console.log(``);
console.log(``);
console.log(`Домашка:`);
console.log(``);
console.log(`Завдання 1: Вивидіть у консулі числа від 1 до 5, різними способами?`);
console.log(``);
console.log(`Цикл For:`);
for (let i = 0; i < 6; ++i) {
	if (i == 0) continue;
	console.log(`числа від 1 до 5: ${i}`);
}
console.log(``);
console.log(`Цикл while:`);
num = 0;
while (num < 5) {
	num++;
	if (num == 0) continue;
	console.log(num);
}
console.log(``);
console.log(`Цикл DO...WHILE:`);
num = 1;
do {
	console.log(num);
	num++;
} while (num < 6)
console.log(``);
console.log(`Завдання 2: Треба зрозуміти вірно ли, що останній вивід в консоль змінна 0, буде 0?`);
console.log(``);
num = 8;
while (num) {
	console.log(num);
	num--;
}
console.log(`Відповідь: Не вірно. останній результат 1, тому що 0 це вже False і цикл зупиниться.`);
console.log(``);
console.log(`Завдання 3: Треба for переписати на while та do...while`);
for (let num = 0; num < 3; num++) {
	console.log(`Число: ${num}`);
}
console.log(``);
console.log(`while`);
num = 0;
while (num < 3) {
	console.log(`Число: ${num}`);
	num++;
}
console.log(``);
console.log(`do...while`);
num = 0;
do {
	console.log(`Число: ${num}`);
	num++
} while (num < 3)
console.log(``);
console.log(`Завдання 4: Треба припинити роботу цикла №1 коли size дорівнює 1`);
console.log('цикл №1:');
for (let num = 0; num < 2; num++) {
	console.log('цикл №2:');
	for (let size = 0; size < 3; size++) {
		console.log(size);
	}
}
console.log(``);
console.log(`Рішення:`);
num = 0;
console.log('цикл №1:');
for (let num = 0; num < 2; num++) {
	console.log(num);
	console.log('цикл №2:');
	for (let size = 0; size < 3; size++) {
		console.log(size);
		if (size == 1) break;
	}
}
console.log(``);
console.log(``);
console.log(`Тема відео: Числа в JAVASCRIPT. Тип даних number. Робота з числами. проблема неточних обчислень.`);
console.log(``);
console.log(`Теорія:`);
console.log(``);
console.log(`Як записати міліон в js?`);
console.log(`let numbers = 1e6; Це: 1 * 1000000`);
console.log(`Як записати найменьше число в js?`);
console.log(`let numbers = 1e-6; Це: 1 / 1000000 = 0.000001`);
console.log(``);
console.log(``);
console.log(`Домашка:`);
console.log(``);
console.log(`Завдання 1: Отримати правильне значення округлення`);
console.log(``);
let numresult = 1.005 + Number.EPSILON;
let numOne = Math.round(numresult * 100) / 100;
console.log(numOne);
console.log(``);
console.log(`Завдання 2: Отримати число 135.58 из строки`);
let value = "135.58px"
console.log(`Рішення:`);
value = parseFloat("135.58px");
console.log(value);
console.log(``);
console.log(`Завдання 3: Побудувати вірну умову розгалуження:`);
value = 58 + "Фрилансер";
if (58 + "Фрилансер" !== NaN) {
	console.log('Результат виразу Nan');
}
console.log(``);
console.log(`Завдання 4: Знайти максимальне та мінімальне число із (10, 58, 39, -150, 0)`);
results = Math.max(10,58,39,-150,0);
console.log(`Максимальне число: ` + results);
results = Math.min(10,58,39,-150,0);
console.log(`Мінімальне число: ` + results);
console.log(``);
console.log(`Завдання 5: Округлити число 58.858 до числа 58. Двумя способами`);
console.log(``);
numOne = Math.floor(58.858);
console.log(`Використан спосіб Math.floor: ` +  numOne);
let numTwo = parseInt(58.858);
console.log(`Використан спосіб parseInt: ` +  numTwo);
console.log(``);
console.log(``);
console.log(`Тема відео: Рядки в JAVASCRIPT. Тип даних string. Типи лапок, пошук, регістр і отримання підрядка.`);
console.log(``);
console.log(`Теорія:`);
console.log(``);
let textOne = "Привіт!";
console.log(textOne);
console.log(`Длина рядка. Свойство length: ${textOne.length}`);
console.log(``);
console.log(``);
console.log(`Домашка:`);
console.log(``);
console.log(`Завдання 1: Вірна ли запис?`);
let fls = "Фрілансер"
console.log(`Не вірна. Тому що, треба змінити на зворотні лабки щоб записати це: (Привіт! Я ${fls})`);
console.log(``);
console.log(`Завдання 2: Отримати симвіл "H" рядка:`);
someString = `Фрілансер`;
someNewString = someString.slice(5, 6);
console.log(someNewString);
console.log(``);
console.log(`Завдання 3: Чи вірно це?: 
let text = 123 + ""456;
ми очікуємо 579
console.log(text);`);
console.log(`Не вірно. String при додаванні з'єднає числа, отмуємо: 123456`);
console.log(``);
console.log(`Завдання 4: Отримати рядок у верхньому регістрі`);
let text = 'Фрілансер';
console.log(`Великий регістр: ${text.toUpperCase()}`);
console.log(``);
console.log(`Завдання 5: Отримати підрядок "лан"`);
console.log(`Відповідь: ${text.slice(3, 6)}`);
console.log(``);
console.log(`Завдання 6: Правда чи Брехня?`);
console.log(`Брехня. Тому що, шукається підрядок не на тій позиції`);
console.log(``);
console.log(``);

// Теорія та лекційна робота

console.log(``);
console.log(`Теорія та лекційна робота №24`);
console.log(``);

// Масиви

console.log(`Масиви:`);
console.log(``);
let someArray = [];
console.log(`Тип даних: ${typeof someArray}`);
console.log(someArray);
console.log(``);
console.log(`Заповнення масиву:`);
someArray = [11, 22, 7];
console.log(`Тип даних: ${typeof someArray}`);
console.log(someArray);
console.log(someArray.length);
console.log(``);
let usersNames = ["Кирилл", "Олег", "Дима"];
console.log(usersNames);
console.log(``);
console.log(`Доступ до елементу масива:`);
console.log(usersNames[0]);
console.log(``);
console.log(`Перебір масиву через for:`);
for (let i = 0; i < usersNames.length; ++i) {
	console.log(usersNames[i]);
}
console.log(``);
console.log(`Метод перебору масиву:`);
console.log(`usersNames.forEach(Element => {});`);
usersNames.forEach((userName, index) => {
	console.log(index + " " + userName);
	// console.log(index);
});
console.log(``);
console.log(`Добавити елемент в масив:`);
console.log(usersNames);
usersNames.push("Жека");
console.log(usersNames);
console.log(`push додає елемент кінець масиву`);
console.log(``);
console.log(`Пошук у масиву:`);
console.log(usersNames.includes('Кирилл'));
console.log(``);
console.log(`Пошук та добавлення елементу в масиві:`);
if (!usersNames.includes(19)) {
	usersNames.push(19);
	console.log(usersNames);
}
console.log(``);
console.log(`Чи це масив. Array.isArray(тут пишемо змінну)`);
usersNames = ["Андрій", "Вася", "Кирилл"];
console.log(Array.isArray(usersNames));
console.log(``);
console.log(`Сортування чисел:`);
let arrTwo = [10, 22, 2];
console.log(arrTwo.sort());

function compareNumeric(a, b) {
	// console.log(`Порівнюємо: ${a} та ${b}`);
	// if (a > b) return 1;
	// if (a == b) return 0;
	// if (a < b) return -1;
	return a-b;
}
console.log(arrTwo.sort(compareNumeric));
console.log(``);
console.log(`З масива у рядок:`);
usersNames = ["Андрій", "Вася", "Кирилл"];
let usersNamesStr = usersNames.join(' ');
console.log(usersNamesStr);
console.log(``);

// Функції

console.log(`Функції`);
console.log(``);
console.log(`Об'ява функції`);
console.log(`Синтаксис:

function ім'я(параметри){
	тіло функції (код функції)
}`);
console.log(``);
function showMessage() {
	console.log("Повідомлення");
}
console.log(``);
console.log(`Виклик (запуск) функції:`);
showMessage();
console.log(``);
console.log(`Приклад:`);
numOne = 10;
numTwo = 20;
console.log(``);
console.log(`Функція суми двох чисел:`);
function calcSum(a, b) {
	showSum(a + b);
}
console.log(`Функція виводу в консоль`);
function showSum(sum) {
	console.log(sum);
}
calcSum(numOne, numTwo);
console.log(``);
console.log(`Повернення результату`);
numOne = 10;
numTwo = 20;
console.log(``);
console.log(`Функція суми двох чисел:`);
function calcSum2(a, b) {
	return a + b;
}
console.log(`Функція виводу в консоль`);
function showSum2(sum) {
	console.log(sum);
}
const calcSumResult = calcSum(numOne, numTwo);
showSum2(calcSumResult);
console.log(``);
console.log(`Стрілочні функції:`);
console.log(``);
console.log(`Функція в один рядок:`);
let showText = (text) => console.log(text);
showText('Привіт!');
console.log(``);
console.log(`Функція де більше рядків:`);
let showText2 = (text) => {
	console.log(text);
	console.log(text);
	console.log(text);
}
console.log(``);
console.log(`Значення параметру за замовченням`);
function someFunc3(text = "Кирилл") {
	console.log(text);
}
someFunc3();
console.log(``);
console.log(``);

// DOM

console.log(`Робота з DOM`);
console.log(``);
console.log(`WINDOW Вікно

Отримання ширини вікна браузера (В'юпорта)`);
console.log(``);
let windowWidth = window.innerWidth;
console.log(windowWidth);
console.log(``);
console.log(`Отримання висоти вікна браузера (В'юпорта)`);
let windowHeight = window.innerHeight;
console.log(windowHeight);
console.log(``);
console.log(`Навігатор:

Дані про браузер:
або
Який в нас браузер`);
console.log(navigator.userAgent);
if (navigator.userAgent.includes("Chrome")) {
	console.log('Браузер Хром');
} else if (navigator.userAgent.includes("Firefox")) {
	console.log('Браузер Firefox');
}
console.log(``);
console.log(`Платформа:`);
console.log(navigator.platform);
console.log(``);
console.log(`Location:

Адресний рядок браузера:`);
console.log(location.href);
console.log(``);
console.log(`Перенаправлення користувача:

location.href = "https://google.com";`);
console.log(``);

// alert

console.log(`alert:

alert('Повідомлення')

Confirm:

confirm("Запитання")

або

let confirmAnswer = confirm("Запитання");
console.log(confirmAnswer); // Щоб вивести true або false

Prompt:

let promptAnswer = prompt("Запитання");
console.log(promptAnswer);`);
console.log(``);
console.log(`Навігація по документу:`);
const htmlElement = document.documentElement;
console.log(htmlElement);
console.log(``);
const headElement = document.head;
console.log(headElement);
console.log(``);
const bodyElement = document.body;
console.log(bodyElement);
console.log(``);
console.log(`Перший та останній дочірній елемент
`);
const firstChildNode = bodyElement.firstChild;
const lastChildNode = bodyElement.lastChild;
console.log(firstChildNode);
console.log(lastChildNode);
console.log(``);
const firstChild = bodyElement.firstElementChild;
const lastChild = bodyElement.lastElementChild;
console.log(firstChild);
console.log(lastChild);
console.log(``);
console.log(`Колекція усіх дочірніх елементів:

Колекція дочірних елементів`);
console.log(``);
const ChildNodes = bodyElement.children;
console.log(ChildNodes);
console.log(``);
console.log(`For ... of метод перебору для колекцій:`);
for (let childNode of ChildNodes) {
	console.log(childNode);
};
console.log(``);
console.log(`Або`);
console.log(``);
console.log(`Перебір колекціїї:`);
for (let i = 0; i < ChildNodes.length; ++i) {
	console.log(ChildNodes[i]);
};
console.log(``);
console.log(`Навігація до батьківських та сусідних елементів:`);
const previousSibling = bodyElement.previousElementSibling;
const nextSibling = bodyElement.nextElementSibling;
const parentElement = bodyElement.parentElement;
console.log(previousSibling);
console.log(nextSibling);
console.log(parentElement);
console.log(``);
console.log(``);

// ! Найчастіше використовується !

console.log(`!!! Найчастіше використовується !!!
Пошук та отриання довільного елементу
Отримання першого знайденого об'єкту`);
const someObject = document.querySelector('.menu__list');
console.log(someObject);
console.log(``);
console.log(`Отримання список знайдених об'єктів:`);
const someObject2 = document.querySelectorAll('.menu__list');
console.log(someObject2);
someObject2.forEach(someObject2 => {
	someObject2.style.background = 'gold';
});
console.log(``);
console.log(`Шукати можна і в будь-якому об'єкті:`);
console.log(`const list = document.querySelector('.menu-page__list');
const listItems = list.querySelectorAll('.menu-page__item');`);
const list = document.querySelector('.menu-page__list');
const listItems = list.querySelectorAll('.menu-page__item');
console.log(``);
console.log(`Пошук батьківського об'єкту

Преревірка в наявності батьківського об'єкту:`);
const isPageParent = list.closest('.page');
console.log(isPageParent);
console.log(``);
if (isPageParent) {
	console.log('Так є');
} else {
	console.log('Ні, немає');
}
console.log(``);
console.log(`Зміна документу:`);
console.log(``);
console.log(`listItems.forEach(listItems => {
	console.log(listItems.innerHTML);
});`);
listItems.forEach(listItems => {
	console.log(listItems.innerHTML);
});
console.log(``);
console.log(`listItems.forEach(listItems => {
	console.log(listItems.textContent);
});`);
listItems.forEach(listItems => {
	console.log(listItems.textContent);
});
console.log(``);
console.log(`listItems.forEach((listItem, index) => {
	listItem.innerHTML = Індекс: $/{index};
});`);
listItems.forEach((listItem, index) => {
	listItem.innerHTML = `Індекс: ${index}`;
});
console.log(``);
console.log(`Створення об'єктів:`);
let newObject = document.createElement('div');
newObject.innerHTML = `<span class = "big">Привіт!</span>`;
console.log(newObject);
const page = document.querySelector('.page__block');
console.log(``);
console.log(`Вставка створного об'єкту:`);
page.before(newObject);
console.log(`Перед: page.before(newObject);
Після: page.after(newObject);
Всередину на початок: page.prepend(newObject);
Всередину в кінець: page.append(newObject);`);
console.log(``);

// insertAdjacentHTML/Text/Element

console.log(``);
const page2 = document.querySelector('.page__container');
page2.insertAdjacentHTML("beforeend", `				
				<div class="page__content content-page">
					<h2 class="content-page__headline">Title</h2>
					<p class="content-page__parahraph">Text</p>
					<button class="content-page__button"><span>Button</span></button>
					<a href="#" class="content-page__link">text-link</a>
				</div>
`);
console.log(``);

//Домашне завдання:

console.log(``);
console.log(``);
console.log(`Домашне завдання:`);
console.log(`Тема відео: Функції в JAVASCRIPT. Стрілочні функції, рекурсія, планування: setTimeout і setInterval.`);
console.log(``);
console.log(`Домашка:`);
console.log(``);
console.log(`Завдання 1: Хто попадає в консоль першим Вася чи Коля?`);
console.log(`function showName() {
	console.log('Вася!');
}
setTimeout(showName, 0);
console.log('Коля!');`);
console.log(`Відповідь: Перевірив це завдання, дійшов до висновку, що першим буде Коля!`);
console.log(``);
console.log(`Завдання 2: Чи вірний виклик функції?`);
console.log(`showMessage2();
function showMessage2() {
	console.log('Сообщение');
}`);
console.log(`Відповідь: Вірно, функцію можна викликати: перед та після заданої функції`);
console.log(``);
console.log(`Завдання 3: Чи вірний виклик функції?`);
console.log(`showMessage2();
let showMessage2 = function () {
	console.log('Сообщение');
}`);
console.log(`Відповідь: Якщо функція буде викликана перед змінної функції, вона викличе помилку. Тоді треба після створеної заданої функції викликати. Тому "Не вірно"`);
console.log(``);
console.log(`Завдання 4: Як вирішити проблему?`);
console.log(`if (2 > 1) {
	function showMessage2() {
		console.log('Сообщение');
	}
}`);
console.log(`

Відповідь: Потрібно замінити функцію на зміннену функцію:
let showMessage2;
if (2 > 1) {
	showMessage2 = function () {
		let summ = 1 + 2;
		console.log(summ);
	}
}
showMessage2();`);
console.log(``);
console.log(``);
console.log(`Тема відео: Масиви в JAVASCRIPT. Методи масивів. Редагування, пошук, сортування. Уроки JavaScript з нуля`);
console.log(``);
console.log(`Домашка:`);
console.log(``);
console.log(`Завдання 1: Яке число (довжину) ми отримуєм?`);
console.log(`let arr = ['Жека', 'Кирилл', 'Вася',];
let newArr = arr;
newArr.push('Катя');
console.log(arr.length);
 `);
console.log(`Відповідь: Буде 4`);
console.log(``);
console.log(`Завдання 2: Створити масив users с елементами "Саша" та "Петя".
додайте в кінці: "Оля" та покажіть результати масива.`);
console.log(`let users = ['Саша', 'Петя',];
users.push('Оля');
console.log(users);
 `);
console.log(`Відповідь: (3) ['Саша', 'Петя', 'Оля']`);
console.log(``);
console.log(`Завдання 3: Зробити із строки масив:
let str = 'Саша, Петя, Оля';
 `);
console.log(`let str = 'Саша, Петя, Оля';
let strNew = str;
let strNewOne = strNew;
strNewOne = strNewOne.replace('Саша, Петя, Оля', 'Саша');
let strNewTwo = strNew;
strNewTwo = strNewTwo.replace('Саша, Петя, Оля', 'Петя');
let strNewThree = strNew;
strNewThree = strNewThree.replace('Саша, Петя, Оля', 'Оля');
let users = [];
users.push(strNewOne, strNewTwo, strNewThree);
 `);
let str = 'Саша, Петя, Оля';
let strNew = str;
let strNewOne = strNew;
strNewOne = strNewOne.replace('Саша, Петя, Оля', 'Саша');
let strNewTwo = strNew;
strNewTwo = strNewTwo.replace('Саша, Петя, Оля', 'Петя');
let strNewThree = strNew;
strNewThree = strNewThree.replace('Саша, Петя, Оля', 'Оля');
let users = [];
users.push(strNewOne, strNewTwo, strNewThree);
console.log(users);
console.log(`Відповідь: ['Саша', 'Петя', 'Оля']`);
console.log(``);
console.log(``);
console.log(``);
console.log(`Завдання 4: Чи дорівнює previousValue на початку метода?`);
console.log(`let arr = [9, 2, 8,];
let reduceValue = arrTwo.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
});`);
console.log(`Відповідь: Значення PreviousValue = 9 (1-й елемент масиву), у разі якщо не вказано таке значення спеціально`);
console.log(``);
console.log(``);
console.log(`Тема відео: JavaScript Document object model (DOM) за годину. Зміна HTML CSS. Атрибути та властивості. Оточення.`);
console.log(``);
console.log(`Домашка:`);
console.log(``);
console.log(`Завдання 1: Отриати в змінну елемент с атрибутом data-say-hi та прочитати значення цього атрибута`);
const lessonText= document.querySelector('div[data-say-hi="yes"]');
console.log (lessonText.dataset.sayHi);
console.log(``);
console.log(`Завдання 2: Отримати в змінну елемент с текстом Йончи`);
const page3 = document.querySelector('.page__container');
page3.insertAdjacentHTML("beforeend", `				
				<ul>
					<li>Корчи</li>
					<li>Йончи</li>
				</ul>
`);
console.log(``);
console.log(`Завдання 3: Отримати в змінну колекцію с класом like`);
const listItems2 = document.querySelectorAll('.like');
console.log(listItems2);
console.log(``);
console.log(`Завдання 4: Куди добавиться <li>Текст</li>`);
const listElement = document.querySelector('ul');
listElement.insertAdjacentHTML('beforeend',`<li>Текст</li>`);
console.log(`Відповідь: Має вставити елемент всередину об'єкта після всього вмісту. Працює, якщо змінити querySelectorAll на querySelector.`);
console.log(``);
console.log(``);
console.log(`Тема відео: JavaScript розміри прокрутка і координати елементів на сторінці та вікна браузера.`);
console.log(``);
console.log(`Домашка:`);
console.log(``);
console.log(`Завдання 1: Дізнатися, яка ширина полоси прокрутки`);
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const windowWidth2 = window.innerWidth;
const different= windowWidth2-mainElementWidth;
console.log(`Відповідь: ${different}`);
console.log(``);
console.log(`Завдання 2: Змусити браузер прокрутитись на 100px зверху спустя секунду після відкриття сторінки`);
function setScrollToOptions(){
   window.scrollTo({
      top:100,
      left:0,
      behavior:"smooth"
   });
}
setTimeout(setScrollToOptions,1000);
console.log(`Відповідь: `);
console.log(``);
console.log(`Завдання 3: Отримати координати різних 3-х елементів на сторінці`);
let item1 = document.querySelector('.page');
let getItemCoords1 = item1.getBoundingClientRect();
console.log(getItemCoords1);
// ! Щось тут викликає помилку
// let item2 = document.querySelector('menu__list');
// let getItemCoords2 = item2.getBoundingClientRect(); 
// console.log(getItemCoords2);
let item3 = document.querySelector('.footer__parahraph');
let getItemCoords3 = item3.getBoundingClientRect();
console.log(getItemCoords3);
console.log(``);
console.log(``);

// Теорія та лекційна робота

console.log(``);
console.log(`Теорія та лекційна робота №25`);
console.log(``);

// Клонування елементу

console.log(`Клонування елементу:`);
console.log(``);
const block = document.querySelector('.page__block');
const blockClone = block.cloneNode(true);
console.log(blockClone);
console.log(``);

// Видалення об'єкту

console.log(`Видалення об'єкту`);
const block2 = document.querySelector('.remove');
block2.remove();
console.log(``);

// Стилі та класи

console.log(`Стилі та класи: className and classList`);
// block.className = ".object";
console.log(``);
console.log(`block.classList.add(); - Додаємо клас`);
console.log(``);
console.log(`block.classList.remove(); -видаляємо клас`);
console.log(``);
console.log(`block.classList.toggle(); - Якщо клас є він видалиться, якщо не має добавиться`);
console.log(``);
console.log(`block.classList.contains(); - Перевіряє чи існує цей блок`);
console.log(``);
block.classList.add('active');
block.classList.remove('block');
block.classList.toggle('block');
console.log(block.classList.contains('block'));
console.log(``);
if (block.classList.contains('active')) {
	console.log('Клас є');
}
console.log(``);
if (!block.classList.contains('active-new')) {
	console.log('Класа немає');
}
console.log(``);

// Управління стилями

console.log(`Управління стилями:`);
console.log(``);
console.log(`Додати властивість`);
block.style.opacity = `0`;
block.style.opacity = `1`;
block.style.paddingTop = `20px`;
console.log(`Прибрати властивість`);
block.style.paddingTop = ``;
console.log(``);
block.style.cssText = `
	background: #1E212C;
	padding: 10px 15px 10px 60px;
	border: 1px solid gold;
	color: red;
`;
console.log(``);

// Отримання стилю (його значення)

console.log(`Отримання стилю (його значення)
getComputedStyle + elementStyle`);
const blockStyle = getComputedStyle(block);
console.log(blockStyle);
console.log(``);
const paddingTop = blockStyle.paddingTop;
console.log(paddingTop);
console.log(``);

// Робота з атрибутами

console.log(`Робота з атрибутами:
hasAttribute('name'); - Перевіряємо наявність атрибута.
getAttribute('name'); - Получаємо значення атрибута.
setAttribute('name'); - Устанавлюємо значення атрибута.
removeAttribute('name'); - Удаляємо атрибут.`);
block.hasAttribute('name');
block.getAttribute('name');
block.setAttribute('name', 'value');
block.removeAttribute('name');
console.log(``);

// DATA атрибути

console.log(`DATA атрибути:`);
const speed = +block.dataset.speed;
console.log(speed + 100);
const speed2 = +block.dataset.animationSpeed;
console.log(speed2);
console.log(``);
console.log(`Створили атрибут`);
block.dataset.save = "132";
console.log(``);
console.log(`Отримали данні`);
const save = +block.dataset.save;
console.log(save);
console.log(``);
console.log(`Перевірка чи є атрибут`);
console.log(block.hasAttribute('data-save'));
console.log(``);

// Корисні властивості

console.log(`Корисні властивості:
Отриання імені тегу`);
console.log(block.tagName);
console.log(``);
console.log(`Атрибут hidden:
block.hidden = true;`);
console.log(``);

// Розміри та кординати

console.log(`Розміри та кординати:

Розміри вікна браузера (з полосами прокрутки)
об'єкт window`);
console.log(windowWidth);
console.log(windowHeight);
console.log(``);
console.log(`Розміри вікна браузера (з полосами прокрутки) clientWidth, clientHeight
об'єкт body`);
const mainElement2 = document.documentElement;
const windowWidth3 = mainElement2.clientWidth;
const windowHeight3 = mainElement2.clientHeight;
console.log(windowWidth3);
console.log(windowHeight3);
console.log(``);

// Кількість прокручених пікселів

console.log(`Кількість прокручений пікселів
об'єкт window`);
const windowScrollTop = window.scrollY;
const windowScrollLeft = window.scrollX;
console.log(windowScrollTop);
console.log(windowScrollLeft);
console.log(``);

// scrollBy (left, top)

console.log(`scrollBy (left, top)
Прокрутка відносно поточного положення
Window.scrollBy(0, 50);
console.log(Window.scrollY);`);
console.log(``);

// crollTo({ options }) 

console.log(`crollTo({ options })
Прокрутка на вказані кординати
Window.scrollTo({
	top: 400,
	left: 0,
	behavior: "smooth"
});`);
console.log(``);

// elem.scrollIntoView();

console.log(`elem.scrollIntoView();
Прокрутка до об'єкту`);
function scrollToBlock() {
	block.scrollIntoView({
		block: "center",
		inline: "nearest",
		behavior: "smooth"
	});
}
console.log(``);

// Позиція об'єкта

console.log(`Позиція об'єкта offsetLeft and offsetTop, offsetParent`);
console.log(block.offsetParent);
console.log(block.offsetLeft);
console.log(block.offsetTop);
console.log(``);

// Загальні розміри елемента

console.log(`Загальні розміри:
offsetWidth and offsetHeight`);
console.log(block.offsetWidth);
console.log(block.offsetHeight);
console.log(``);

// Кординати відносно вікна браузера

console.log(`Кординати відносно вікна браузера:
getBoundingClientRect`);
console.log(block.getBoundingClientRect());
console.log(block.getBoundingClientRect().top);
console.log(block.getBoundingClientRect().left);
console.log(``);

// Отримання об'єкта по кординатам

console.log(`Отримання об'єкта по кординатам
document.elementFromPoint(x, y);`);
const elem = document.elementFromPoint(30, 0);
console.log(elem);
console.log(``);

// Події

console.log(`Події:
Синтаксис події:
link.onclick = function () {
	// код
}`);
const link = document.querySelector('.active-link');
console.log(`link.onclick = function () {
	console.log('123');
}`);
console.log(``);
console.log(`elem/document.addEventListener("ім'я події", func);
elem/document.addEventListener("ім'я події", ()=>{ code });`);
console.log(`link.addEventListener("click", linkAction);`);
console.log(`link.addEventListener("click", () => {
	console.log('123');
});`);
console.log(`link.addEventListener("click", linkAction);
function linkAction(event) {
	console.log('342');
}`);
console.log(``);
console.log(`Відмінити подію
removeEventListener`);
console.log(`link.removeEventListener("click", linkAction);`);
console.log(``);
console.log(`Відмінити подію у функції`);
link.addEventListener("click", linkAction);
function linkAction(event) {
	console.log('342');
	link.removeEventListener("click", linkAction);
}
console.log(``);
const options = {
	"capture": false,
	"once": true,
	"passive": false
}
console.log(`link.addEventListener("click", linkAction);
function linkAction(event) {
	console.log('342');
}`);
console.log(``);
console.log(`Дія за засовченням:`);
console.log(`link.addEventListener("click", linkAction);
function linkAction(event) {
	if (link.dataset.google === "false") {
		console.log('ку-ку');
		event.preventDefault();
	}
}`);
console.log(``);
console.log(`Події для багатьох елементів:`);
console.log(`link.forEach(link => {
	link.addEventListener("click", linkAction);
	function linkAction(event) {
		if (link.dataset.google === "false") {
			console.log('ку-ку');
			event.preventDefault();
		}
}
});`);
console.log(``);
console.log(`Делегування події`);
console.log(`document.addEventListener("click", action);
function linkAction(event) {
	const targetItem = event.target;
	if(targetItem.closest('active-link')) {console.log('Its LIN!'); event.preventDefault()}
	console.log('Click');
}`);
console.log(``);
console.log(`Основін події миші:
click, mouseenter, mouseleave
mouseenter - наведення миші
mouseleave - переведення миші
mousemove - рух миші`);
console.log(`const mouseBlock = document.querySelector('.mouse');
mouseBlock.addEventListener("mouseenter", mouseAction);
mouseBlock.addEventListener("mouseleave", mouseAction);
mouseBlock.addEventListener("mousemove", mouseAction);
function mouseAction(event) {
	if (event.type === "mouseenter") {
		// При наведенні
		console.log(event.pageY);
	}
	if (event.type === "mouseleave") {
		// При переведенні
		console.log(event.pageY);
	}
	if (event.type === "mousemove") {
		console.log('Y: $/{event.pageY}');
		console.log('X: $/{event.pageX}');
	}
}`);
console.log(``);
console.log(`Scroll:`);
console.log(`window.addEventListener("scroll", wScroll);
const mouseBlock = document.querySelector('.mouse');
function wScroll(e) {
	console.log(scrollY);
	console.log(mouseBlock.getBoundingClientRect().top);
}`);
console.log(``);
console.log(`Завантаження:`);
console.log(`window.addEventListener("DOMContentLoaded", domLoaded);
function domLoaded(e) {
	
}
window.addEventListener("load", pageLoaded);
function pageLoaded(e) {
	document.documentElement.classList.add('loaded');
}`);
console.log(``);

// Кординати

console.log(`Кординати
clientX/clientY
pageX/pageY`);
console.log(``);

//Домашне завдання:

console.log(``);
console.log(``);
console.log(`Домашне завдання:`);
console.log(`Тема відео: JAVASCRIPT ПОДІЇ. addEventListener делегування. Події миші клавіатури завантаження сайту. Практика`);
console.log(``);
console.log(`Домашка:`);
console.log(``);
console.log(`Завдання: Написати форму пошуку, яка відкривається по кліку на іконку, а зачиняється по кліку на любе місце сторінки, окрім самої форми.
А також, зачинити форму можно по клавіщі Esc на клаві.
Для поля ввода пошукового запроса добавимо счетчик символів.`);

const formSearch = document.querySelector('.form__search');
const iconSearch = document.querySelector('.search-form__button');

document.addEventListener('click', formSearchOpen);
function formSearchOpen(e) {
	if (e.target.closest('.search-form__button')) {
		formSearch.classList.toggle('open-search');
	}
	if (formSearch.classList.contains('open-search')) {
		document.addEventListener('keyup', e => {
			if (e.code === 'Escape') {
				formSearch.classList.remove('open-search');
			}
		});
		if (e.target !== iconSearch && !e.target.closest('.form__search')) {
			formSearch.classList.remove('open-search');
		}
	}
}
// document.addEventListener('click', (e) => {
// 	if (e.target.closest('.search__icon')) {
// 		formSearch.classList.toggle('open-search');
// 	}
// 	if (formSearch.classList.contains('open-search')) {
// 		document.addEventListener('keyup', e => {
// 			if (e.code === 'Escape') {
// 				formSearch.classList.remove('open-search');
// 			}
// 		});
// 		if (e.target !== iconSearch && !e.target.closest('.form__search')) {
// 			formSearch.classList.remove('open-search');
// 		}
// 	}
// });

const searchInput = document.querySelector('.search-form__input');
const searchInputLimit = searchInput.getAttribute('maxlength');
const searchValue = document.querySelector('.search-form__counter span');

searchValue.innerHTML = searchInputLimit;

console.log(searchInputLimit);

searchInput.addEventListener('keyup', setCounter);

function setCounter() {
	searchValue.innerHTML = searchInputLimit - searchInput.value.length;
}

searchInput.addEventListener('keydown', (e) => {
	if (e.repeat) {
		setCounter();
	}
})
alert(`Привіт! Усі мої домашки(№22-25) та напрацювання побачите у консолі та js файлі. Чекаю ваш отзив на цю роботу, Розігрійте чаю або кофе, бо довге занурення у код : )`);