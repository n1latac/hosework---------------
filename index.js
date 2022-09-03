//1. Написати функцію, яка приймає в якості аргумента висоту прямокутника і його ширину,повертає площу прямокутника.
function squareArea(a, b) {
   return a * b
}
console.log(squareArea(3, 5));

//2. Написати функцію, яка приймає в якості аргумента діаметр кола і повертає довжину кола (длина окружности по диаметру)
function circleLength(d) {
   return 2 * (d / 2) * Math.PI
}
console.log(circleLength(6));


//3. Написати функцію, яка приймає в якості аргумента висоту циліндра та діаметр основи і повертає об'єм циліндра.
function cylinderVolume(h, d) {
   let r = d / 2;
   return h * r * r * Math.PI
}
console.log(cylinderVolume(8, 4));


//4. Написати функцію, яка приймає два числа (діапазон) і виводити на консоль всі числа з цього діапазону, які діляться на 5.
//while
function multiplesOf5WithWhile(a, b) {
   while (a <= b) {
      if (a % 5 === 0) {
         console.log(a);
      }
      a++;
   }
}
multiplesOf5WithWhile(5, 40);

//for

function multiplesOf5WithFor(a, b) {
   for (a; a <= b; a++) {
      if (a % 5 === 0) {
         console.log(a);
      }
   }
}
multiplesOf5WithFor(45, 80);


//5. Реалізовати гру FizzBuzz для 100 чисел.


function FizzBuzz() {
   for (let i = 1; i <= 100; i++) {
      switch (true) {
         case i % 3 === 0 && i % 5 === 0: {
            console.log('fizz buzz');
            continue
         }
         case i % 3 === 0: {
            console.log('fizz');
            continue
         }
         case i % 5 === 0: {
            console.log('buzz');
            continue
         }
         default: {
            console.log(i);
         }
      }
   }
}

FizzBuzz();


//Написати функцію, яка приймає коефіцієнти квадратного рівняння і вирішує рівняння, і виводить на консоль можливі значення Х.
let x1, x2;
let a = Number(prompt('a ='));
let b = Number(prompt('b ='));
let c = Number(prompt('c ='));
function quadraticEquation(a, b, c) {
   let D = b * b - (4 * a * c);
   if (a === 0) {
      x1 = 0;
      return console.log('один корень уравнения', x1);
   }
   if (c === 0) {
      x1 = 0;
      x2 = -b / a;
      return console.log('x1 =', x1, ' x2=', x2);
   }
   if (b === 0) {
      if ((-c / a) < 0) {
         return console.log('нет корней уравнения');
      } else {
         x1 = -c / a;
         x2 = -(-c / a);
         return console.log('x1 =', x1, ' x2=', x2);
      }
   }
   if (D > 0) {
      x1 = (-b + Math.sqrt(D)) / 2 * a;
      x2 = (-b - Math.sqrt(D)) / 2 * a;
      return console.log('x1 =', x1, ' x2=', x2);
   } else if (D === 0) {
      x1 = -b / 2 * a;
      return console.log('один корень уравнения', x1);
   } else {
      return console.log('нет корней уравнения, D =', D);
   }
}
quadraticEquation(a, b, c);

