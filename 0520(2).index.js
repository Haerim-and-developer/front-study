//자바스크립트 코드에서 프로퍼티로 등록하는 방법

window.onload = function () {
  let text = doument.getElemenById("text");
  text.innerHTML = " HTML 문서가 로드되었습니다";
};

//HTML 태그에 속성으로 등록
{
  /* <p onclick="alert('문자열을 클릭했어요')">클릭</p> */
}

//addEventListener()
let showBtn = document.getElementById("btn");

showBtn.addEventListener("click", showText);
function showText() {
  document.getElementById("text").innerHTML = "짜잔";
}

//여러 개의 이벤트 리스너 등록
let btn = document.getElementById("btn");
btn.addEventListener("click", clickBtn);
btn.addEventListener("mouseover", mouseoverBtn);
btn.addEventListener("mouseout", mouseoutBtn);

function clcickBtn() {
  document.getElementById("text").innerHTML = "버튼클릭됨";
}
function mouseoverBtn() {
  document.getElementById("text").innerHTML = "버튼 위에 마우스가 있음";
}
function mouseoutBtn() {
  document.getElementById("text").innerHTML = "버튼 밖으로 마우스가 나감";
}

//이벤트 리스너 삭제
function clickBtn() {
  btn.removeEventListener("mouseover", mouseoverBtn);
  btn.removeEventListener("mouseout", mouseoutBtn);
  document.getElementById("text").innerHTML = "이벤트 리스너가 삭제되었어요!";
}

//이벤트 리스너 호출
var btn1 = document.getElementById("btn");
btn.addEventListener("click", clickBtn);
function clickBtn(event) {
  document.getElementById("text").innerHTML =
    "이 이벤트의 타입은" +
    event.type +
    "이며,이벤트의 대상은" +
    event.target +
    "입니다";
}

//버블링 전파 방식
document.getElementById("divBox").addEventListener("click", clickDiv);
document.getElementById("paraBox").addEventListener("click", clickPara);
document.getElementById("spanBox").addEventListener("click", clickSpan);

function clickDiv(event) {
  document.getElementById("text").innerHTML = "div 요소를 clcick 하셨네요<br>";
}
function clickPara(event) {
  document.getElementById("text").innerHTML += "p 요소를 click 하셨네요!<br>";
}
function clickSpan(event) {
  document.getElementById("text").innerHTML +=
    "span 요소를 click 하셨네요!<br>";
}

//캡처링 전파 방식
document.getElementById("divBox").addEventListener("click", clickDiv, true);
document.getElementById("paraBox").addEventListener("click", clickPara, true);
document.getElementById("spanBox").addEventListener("click", clickSpan, true);

//이벤트 기본 동작의 취소
document.getElementById("divBox").addEventListener("click", clickDiv);
document.getElementById("paraBox").addEventListener("click", clickPara);
document.getElementById("linkBox").addEventListener("click", clickLink);

function clickDiv(event) {
  document.getElementById("text").innerHTML += "div 요소를 click 하셨네요!<br>";
}
function clickPara(event) {
  document.getElementById("text").innerHTML += "p 요소를 click 하셨네요!<br>";
}

function clcick(event) {
  event.preventDefalut();
  document.getElementById("text").innerHTML +=
    "링크의 기본 동작을 막았어요!<br>";
  document.getElementById("text").innerHTML += "a 요소를 click 하셨네요!<br>";
}

//이벤트 전파의 취소
function clickLink(event) {
  event.preventDefault(); // 링크의 기본 동작을 취소함.
  document.getElementById("text").innerHTML +=
    "링크의 기본 동작을 막았어요!<br>";
  event.stopPropagation(); // 이벤트의 전파를 취소함
  document.getElementById("text").innerHTML += "이벤트의 전파를 막았어요!<br>";
}
