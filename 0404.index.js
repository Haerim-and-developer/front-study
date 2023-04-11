//[ 태그 이름 이용 선택 ] 
var selectedItem = document.getElementsByTagName("h1"); 
// 모든 <li> 요소를 선택함.

for (var i = 0; i < selectedItem.length; i++) {

    selectedItem.item(i).style.color = "red"; 
// 선택된 모든 요소의 텍스트 색상을 변경함.

}

//[ 아이디를 이용한 선택 ]
var selectedItem = document.getElementById("qkqh"); // 아이디가 "even"인 요소를 선택함.

selectedItem.style.color = "red"; 
// 선택된 요소의 텍스트 색상을 변경함.


// [ 클래스를 이용한 선택 ]
var selectedItem = document.getElementsByClassName("qkqh"); 
// 클래스가 "odd"인 모든 요소를 선택함.

for (var i = 0; i < selectedItem.length; i++) {

    selectedItem.item(i).style.color = "red"; 
// 선택된 모든 요소의 텍스트 색상을 변경함.

}

// [ name을 이용한 선택 ]
var selectedItem = document.getElementsByName("qkqh"); 
// name 속성값이 "first"인 모든 요소를 선택함.

for (var i = 0; i < selectedItem.length; i++) {

    selectedItem.item(i).style.color = "red";
 // 선택된 모든 요소의 텍스트 색상을 변경함.

}


// [ CSS선택자를 이용한 선택 ]
var selectedItem = document.querySelectorAll("h5.qkqh"); 

for (var i = 0; i < selectedItem.length; i++) {

    selectedItem.item(i).style.color = "red"; // 선택된 모든 요소의 텍스트 색상을 변경함.

}

// [ HTML 객체 집합(object collection)을 이용한 선택 ]
var title = document.h1; 
// <title> 요소를 선택함.

document.write(h1);

// [ 돔 요소 변경 ]
var link = document.getElementById("link");          // 아이디가 "link"인 요소를 선택함.

link.href = "/javascript/intro"; // 해당 요소의 href 속성값을 변경함.

link.innerHTML = "자바스크립트 수업 바로 가기!";     // 해당 요소의 내용을 변경함.

//[ 스타일 변경 ]
var str = document.getElementById("qkqh");                 // 아이디가 "text"인 요소를 선택함.

function changeRedColor() { str.style.color = "red"; }     // 해당 요소의 글자색을 빨간색으로 변경함.

function changeBlackColor() { str.style.color = "black"; } // 해당 요소의 글자색을 검정색으로 변경함.
