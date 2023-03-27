function addNum(x, y, z) { 
    // x, y, z라는 3개의 매개변수를 가지는 함수 addNum()을 정의함.
    
        return x + y + z;
    
    }
    
    addNum(1, 2, 3); 
    // 인수로 1, 2, 3을 전달하여 함수를 호출함. -> 6
    
    addNum(1, 2);   
     // 인수로 1, 2을 전달하여 함수를 호출함. -> NaN
    
    addNum(1);      
     // 인수로 1을 전달하여 함수를 호출함. -> NaN
    
    addNum();        
    // 인수로 아무것도 전달하지 않고 함수를 호출함. -> NaN

    function addNum(x, y, z) {

        if(x === undefined) 
    // 함수 호출시 x에 해당하는 인수가 전달되지 않은 경우
    
            x = 0;          
    // 변수 x의 값을 undefined에서 0으로 변경함.
    
        if(y === undefined) 
    // 함수 호출시 y에 해당하는 인수가 전달되지 않은 경우
    
            y = 0;          
    // 변수 y의 값을 undefined에서 0으로 변경함.
    
        if(z === undefined) 
    // 함수 호출시 z에 해당하는 인수가 전달되지 않은 경우
    
            z = 0;          
    // 변수 z의 값을 undefined에서 0으로 변경함.
    
        return x + y + z;
    
    }
    
    addNum(1, 2, 3); // 6
    
    addNum(1, 2);    // 3
    
    addNum(1);       // 1
    
    addNum();        // 0

    function addNum() {

        var sum = 0;                                
    // 합을 저장할 변수 sum을 선언함.
    
        for(var i = 0; i < arguments.length; i++) {
     // 전달받은 인수의 총 수만큼 반복함.
    
            sum += arguments[i];                    
    // 전달받은 각각의 인수를 sum에 더함.
    
        }
    
        return sum;
    
    }
    
    addNum(1, 2, 3); // 6
    
    addNum(1, 2);    // 3
    
    addNum(1);       // 1
    
    addNum();        // 0
    
    addNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55

    function mul(a, b) {

        // 인수가 한 개만 전달되었을 때 나머지 매개변수의 값을 undefined 값이 아닌 1로 설정함.
    
        b = (typeof b !== 'undefined')  ? b : 1;
    
        return a * b;
    
    }
    
    mul(3, 4); // 12
    
    mul(3);    // 3

    function mul(a, b = 1) { 
        // 인수가 한 개만 전달되면 나머지 매개변수의 값을 언제나 1로 설정해 줌.
        
            return a * b;
        
        }
        
        mul(3, 4); // 12
        
        mul(3);    // 3

        function sub() {

            var firstNum = arguments[0];                 
         // 첫 번째 인수에서
        
            for(var i = 0; i < arguments.length-1; i++) { 
        // 두 번째부터 마지막 인수까지를
        
                firstNum -= arguments[i+1];               
        // 뺌.
        
            }
        
            return firstNum;
        
        }
        
        sub(10, 2, 3);    // 10 - 2 - 3 = 5
        
        sub(10, 1, 5, 8); // 10 - 1 - 5 - 8 = -4

         // 첫 번째 인수를 변수 firstNum에 저장하고 나머지 인수들은 배열 restArgs에 저장함.

function sub(firstNum, ...restArgs) {

    for(var i = 0; i < restArgs.length; i++) {

        firstNum -= restArgs[i];

    }

    return firstNum;

}

sub(10, 2, 3);    // 10 - 2 - 3 = 5

sub(10, 1, 5, 8); // 10 - 1 - 5 - 8 = -4

var x = 10, y = 20;

var a = eval("x + y"); // 30

var b = eval("y * 3"); // 60

document.write(a + "<br>" + b);

isFinite(123);       // true

isFinite(123e100);   // true

isFinite(0);         // true

isFinite(true);      // true

isFinite(false);     // true

isFinite(null);      // true

isFinite("123");     // true

isFinite("");        // true

 

isFinite("문자열");  // false

isFinite(undefined); // false

isFinite(NaN);       // false

isNaN(123);       // false

isNaN(123e100);   // false

isNaN(0);         // false

isNaN(true);      // false

isNaN(false);     // false

isNaN(null);      // false

isNaN("123");     // false

isNaN("");        // false

 

isNaN("문자열");  // true

isNaN(undefined); // true

isNaN(NaN);       // true

parseFloat("123");        // 123

parseFloat("123.000");    // 123

parseFloat("123.456");    // 123.456

parseFloat("12 34 56");   // 12

parseFloat(" 123 ");      // 123

parseFloat("123 초콜릿"); // 123

parseFloat("초콜릿 123"); // NaN

parseInt("123");        // 123

parseInt("123.000");    // 123

parseInt("123.456");    // 123

parseInt("12 34 56");   // 12

parseInt(" 123 ");      // 123

parseInt("123 초콜릿"); // 123

parseInt("초콜릿 123"); // NaN

 

parseInt("10", 10);     // 10

parseInt("10", 8);      // 8

parseInt("10", 16);     // 16

parseInt("0x10");       // 16

var uri = "http://google.com/search.php?name=홍길동&city=서울";

 

var enc1 = encodeURI(uri);

var enc2 = encodeURIComponent(uri);

document.write(enc1 + "<br>" + enc2);

var str = "Hello! World ?#$";

 

var esc = escape(str);

var une = unescape(esc);

document.write(esc + "<br>" + une);

Number("123");        // 123

Number("123.000");    // 123

Number("123.456");    // 123.456

Number("12 34 56");   // NaN

Number("123 초콜릿"); // NaN

 

Number(true);         // 1

Number(false);        // 0

Number(new Date());   // 현재 날짜에 해당하는 숫자를 반환함.

Number(null);         // 0

String(123);        // 123

String(123.456);    // 123.456

String("123");      // 123

String(new Date()); // 현재 날짜에 해당하는 문자열을 반환함.

String(null);       // null

 

String(true);       // true

String(false);      // false

String(Boolean(1)); // true

String(Boolean(0)); // false