// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
'use strict';

// 2. Variable, rw(read/write) :변수 (변경될 수 있는 값) (메모리에 읽고 쓰는 것이 가능.)
// let (added in ES6)

let globalName = 'global name';
// globla scope:어느 곳에서나 접근이 가능. 당연히 괄호 안에서도 접근이 가능하다.
// class나 함수 if나 for로 필요한 부분에서만 정의해서 쓰는 것이 좋음.
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
//Block scope : 괄호를 이용해서 코드를 작성하면, 더이상 블럭 안에 있는 내용들을 볼 수 없음.
// 즉 블럭 밖에서 'name'으로 콘솔로 호출해도 값은 안 나옴.
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top) : 어디에 선언했느냐에 상관없이 항상 제일 위로 끌어올려주는 것.
// has no block scope 블럭스콥에 변수를 선언해도 어디에서나 아무데서나 호출해도 실행이 돼버림.
{
  age = 4;
  var age;
}
console.log(age);


// 3. Constant, r(read only) 한번 할당하면 값이 절대 바뀌지 않는 것. (메모리를 읽는 것만 가능)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS(자바스크립트의 기본은 대부분 가능.)
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes


// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container(싱글 아이템들을 묶어서 하나의 박스로 관리해줌.)
// function, first-class function: js에서는 function도 변수에 할당 가능. 함수에 파라미터(인자)로 전달 가능. 리턴도 가능.

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0; //숫자를 0으로 나누면 무한대의 숫자값이 생김.
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2; //스트링을 숫자로 나누게 되면 NaN 값이 출력
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan; //일반 스트링과 다른 변수를 + 로 붙이는 것도 가능함.
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);


// null vs nudefined
// null : 내가 empty라고 아예 할당 한 것(값 자체를 empty라고 준 것임)
// nudefined: 값 자체가 정의되지 않음.

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);


// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // 동일한 스트링을 작성했어도 다른 값으로 만들어 짐.
const gSymbol1 = Symbol.for('id'); //동일하게 만들고 싶다면 for를 붙여라.
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));
