//Array.isArray 메소드
Array.isArray([]); //true
Array.isArray(new Array()); //true
Array.isArray(123); //false
Array.isArray("hi"); //false

//Array.from 메소드
function arrayFrom() {
  return Array.from(arguments);
}
Array.from(arrayFrom(1, 2, 3)); //[1,2,3]
var myMap = new Map([
  [1, 2],
  [3, 4],
]);
Array.from(myMap); //[1,2,3,4]
Array.from("java"); //[j,a,v,a]

//Array.of() 메소드
new Array(10); //10개의 배열 요소를 가지는 빈 배열을 생성함
Array.of(10); //한 개(숫자 10)의 배열 요소를 가지는 배열을 생성함

//push 메소드
var arr = [1, true, "JavaScript", "자바스크립트", 2, "거짓"];
arr.length; //3
arr.push("자바스크립트");
arr.length; //4
arr.push(2, "거짓");
arr.length; //6
arr; //[1,true,JavaScript,자바스크립트,2,거짓]

//pop 메소드
var arr = [1, true, "JavaScript", "자바스크립트"];
arr.length; //4
arr.pop(); //자바스크립트 삭제
arr.length; //3
arr.pop(); //JavaScript 삭제

//shift() 메소드
var arr = [1, true, "JavaScript", "자바스크립트"];
arr.length; // 4
arr.shift(); // 1
arr.length; // 3
arr.shift(); // true
arr.length; // 2
arr; // [JavaScript,자바스크립트]

//unshift() 메소드
var arr = ["자바", 1, true, "java"];
arr.length; //3
arr.unshift("자바");
arr.length; //4
arr; //[자바,1,true,"java",]

//reverse() 메소드
var arr = [1, true, "java", "javascript"];
arr.reverse(); //["javascript",'java",true,1]

//sort() 메소드
var strArr = ["로마", "나라", "감자", "다람쥐"];
var numArr = [10, 21, 1, 2, 3]; //각 자릿수 별로 비교된 후 정렬됨
strArr.sort(); //[감자,나라,다람쥐,로마]
numArr.sort(); //[1,10,2,21,3]

//splice() 메소드
var arr = [1, true, "JavaScript", "자바스크립트"];
//인덱스 1의 요소부터 2개의 요소를 제거한 후, false 와 "c언어"를 그 자리에 삽입함
var removedElement = arr.splice(1, 2, false, "c언어");
arr; // [1,false,C언어,자바스크립트]

//join() 메소드
var arr = ["1,true,JavaScript"];
arr.join(); // 1,true,JavaScript
arr.join(" + "); // 1 + true + JavaScript
arr.join(" "); // 1 true JavaScript
arr.join(""); // 1trueJavaScript

//slice() 메소드
var arr = [1, true, "JavaScript", "자바스크립트"];
arr.slice(1, 3); //[true,JavaScript]
arr.slice(1); //[true,JavaScript,자바스크립트]

//concat() 메소드
var arr = [1, true, "java"];
arr.concat([2, false, "문자열"]); //[1,true,JavaScript,2,false,문자열]
arr.concat([2], [3, 4]); //[1,true,JavaScript,2,3,4] //2개 이상의 배열도 한 번에 합칠 수 있다

//toString() 메소드
var arr = [1, true, "JavaScript"];
arr.toString(); //'1,true,JavaScript'

//forEach() 메소드
var arr = [1, true, "javascript"];
function printArr(value, index, array) {
  document.write("arr[" + index + "] = " + value);
}
arr.forEach(printArr); //배열 arr의 각 요소마다 printArr() 함수가 호출됨

//map() 메소드
var arr = [1, -2, 3, -4];
// 배열 arr의 각 요소마다 Math.abs() 함수가 호출되고 그 결괏값이 배열로 저장됨.
var absoluteValue = arr.map(Math.abs);
absoluteValue; //[1,2,3,4]

//filter() 메소드
var arr = [-10, 5, 100, -20, 40];
function compareValue(value) {
  return value < 10;
}
var lessTen = arr.filter(conpareValue);
lessTen; //[-10,5,-20]

//every() 메소드
var arr = [-10, 5, -20, 4];
function compareValue(value) {
  return value < 10; //배열의 모든 요소가 10보다 작음
}
arr.every(compareValue); //true

//some() 메소드
var arr = [10, 25, -20, 14];
function compareValue(value) {
  return value < 10; // 배열 요소 중 -20만이 10보다 작음.
}
arr.some(compareValue); // true

//reduce() 메소드
var arr = [1, 2, 3, 4, 5];
function sumOfValues(x, y) {
  return x - y;
}
arr.reduce(sumOfValues); // 1 - 2 - 3 - 4 - 5 = -13

//entries() 메소드
var arr = [1, true, "JavaScript"];
var arrEntries = arr.entries();
for (var entry of arrEntries) {
  document.write(entry + "<br>"); // 배열의 인덱스별로 키(key)와 값(value)의 한 쌍을 출력함.
}
