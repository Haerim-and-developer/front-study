
//대입 연산자(=,+=,-=,*=,/=,%=)
var x = 10, y = 10, z = 10;
x = x - 5;
y -= 5; // y = y - 5 와 같은 표현임.
z =- 5; // z = -5 와 같은 표현임.

//증감 연산자(++,--)
var x = 10, y = 10;
document.write((++x - 3) + "<br>"); // x의 값을 우선 1 증가시킨 후에 3을 뺌.
document.write(x + "<br>");         // 11
document.write((y++ - 3) + "<br>"); // 먼저 y에서 3을 뺀 후에 y의 값을 1 증가시킴.
document.write(y);  

//비교 연산자(==, ===, !=, !== , <,>,>=,<=,)
var x = 3, y = 5;
var a = "abc", b = "bcd";
document.write((x > y) + "<br>");  // y의 값이 x의 값보다 크므로 false
document.write((a <= b) + "<br>"); // 알파벳 순서상 'a'가 'b'보다 먼저 나오므로 'a'가 'b'보다 작음.
document.write(x < a);             // x의 값은 숫자이고 a의 값은 문자열이므로 비교할 수 없음.

//논리 연산자 (&&, ||, !)
var x = true, y = false;
document.write((x && y) + "<br>"); // false (논리 AND 연산)
document.write((x || y) + "<br>"); // true  (논리 OR  연산)
document.write(!x);                // false (논리 NOT 연산)

//비트 연산자 (&, |, ^, ~, <<,>>,>>>)
var x = 15, y = 8, z = 15;
document.write((x << 1) + "<br>"); // 곱하기 2와 같으므로 15 * 2 = 30
document.write((y >> 1) + "<br>"); // 나누기 2와 같으므로 8 / 2 = 4
document.write(~z);                // 1의 보수와 같으므로 -(15+1) = -16

//기타 연산자 (숫자+숫자, 문자+문자, 문자+숫자)
var x = 3 + 4;                   // 피연산자가 둘 다 숫자이면 덧셈 연산을 수행함.
var y = "좋은 " + "하루 되세요!" // 피연산자가 둘 다 문자열이면 문자열 결합 연산을 수행함.
var z = 12 + "월"                // 피연산자가 하나라도 문자열이면 문자열 결합 연산을 수행함.