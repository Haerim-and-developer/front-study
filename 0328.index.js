// <래퍼 객체>
var str = "문자열";   
// 문자열 생성

var len = str.length; 
// 문자열 프로퍼티인 length 사용

var str = "문자열";           
// 문자열 리터럴 생성

var strObj = new String(str); 
// 문자열 객체 생성

str.length;                   
// 리터럴 값은 내부적으로 래퍼 객체를 생성한 후에 length 프로퍼티를 참조함.

str == strObj;                
// 동등 연산자는 리터럴 값과 해당 래퍼 객체를 동일하게 봄.

str === strObj;               
// 일치 연산자는 리터럴 값과 해당 래퍼 객체를 구별함.

typeof str;                   
// string 타입

typeof strObj;                
// object 타입



// <자바스크립트에서의 수 표현>
var x = 999999999999999;  
// 15자리의 정수부

var y = 9999999999999999; 
// 16자리의 정수부

var z = 0.1 + 0.2

x; // 999999999999999

y; // 10000000000000000

z; // 0.30000000000000004

//<오차 없애기>
var z = (0.2 * 10 + 0.1 * 10) / 10; // 0.3

// <진법 표현>
var x = 0xAB; // 16진법으로 표현된 10진수 171

var y = 29;   // 10진법으로 표현된 10진수 29

x + y;        // 두 수 모두 10진법으로 자동으로 변환되어 계산됨. -> 200

//toString() 메소드
var num = 256;

num.toString(2);       
//  2진법으로 변환 : 100000000

num.toString(8);       
//  8진법으로 변환 : 400

num.toString(10);      
// 10진법으로 변환 : 256

num.toString(16);      
// 16진법으로 변환 : 100

// 2진수로 변환한 결괏값을 문자열로 반환함.

num.toString(2);       
// 100000000

// 문자열을 숫자로 나눴기 때문에 자동으로 10진수로 변환되어 산술 연산된 결괏값

(num.toString(2) / 2); // 50000000

//<Infinity>
var x = 10 / 0;         
// 숫자를 0으로 나누면 Infinity를 반환함.

var y = Infinity * 1000
// Infinity에 어떠한 수를 산술 연산해도 Infinity를 반환함.

var z = 1 / Infinity    
// Infinity의 역수는 0을 반환함.

x;                      
// Infinity

y;                      
// Infinity

z;                      
// 0

// <NaN>
var x = 100 - "10";     // "10"은 자동으로 숫자로 변환되어 계산됨.

var y = 100 - "문자열"; // "문자열"은 숫자로 변환할 수 없기 때문에 NaN을 반환함.

var z = 0 / 0;          // 0을 0으로 나눌 수 없기 때문에 NaN을 반환함.

x;                      // 90

y;                      // NaN

z;                      // NaN

//<isNaN()>
var x = 100 * "문자열";

if(isNaN(x)) { // 전달된 값이 숫자인지 아닌지를 검사함.

    document.write("변수 x의 값은 숫자가 아닙니다.");

} else {

    document.write("변수 x의 값은 숫자입니다.");

}

// <null, undefined, NaN, Infinity에 대한 비교>
typeof null;        // object

typeof undefined;   // undefined

typeof NaN;         // number

typeof Infinity;    // number

 

Boolean(null);      // false

Boolean(undefined); // false

Boolean(NaN);       // false

Boolean(Infinity);  // true

 

Number(null);       // 0

Number(undefined);  // NaN

Number(NaN);        // NaN

Number(Infinity);   // Infinity

 

String(null);       // null

String(undefined);  // undefined

String(NaN);        // NaN

String(Infinity);   // Infinity

//Number 객체
var x = 100;             // 숫자 리터럴

var y = new Number(100); // Number 객체

x;                       // 100

y;                       // 100

typeof x;                // number 타입

typeof y;                // object 타입


var x = 100;             // 숫자 리터럴 100

var y = new Number(100); // Number 객체 100

x == y;                  // 값이 같으므로 true

x === y;                 // 서로 다른 객체이므로 false