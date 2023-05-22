//alert() 메소드
window.alert("간단한 메시지");

function alertDialogBox() {
  alert("확인을 누를 때까지 다른 작업을 할 수 없어요!");
}

//confirm() 메소드
window.confirm("간단한 메시지");

function confirmDialogBox() {
  var str;

  if (confirm("확인이나 취소를 눌러주세요!") == true) {
    str = "당신은 확인을 눌렀습니다!";
  } else {
    str = "당신은 취소을 눌렀습니다!";
  }

  document.getElementById("text").innerHTML = str;
}

//promt() 메소드

window.prompt("간단한 메시지" + "입력란의 기본 메시지");

function promptDialogBox() {
  var inputStr = prompt("당신의 이름을 입력해 주세요 : ", "홍길동");

  if (inputStr != null) {
    document.getElementById("text").innerHTML =
      "당신의 이름은 " + inputStr + "입니다.";
  }
}

//setTimeout() 메소드
window.setTimeout(호출할함수, 지연시간);

function startTimeout() {
  setTimeout(printCurrentDate, 2000);
}

function printCurrentDate() {
  document.getElementById("date").innerHTML = new Date();
}

//setInterval() 메소드
window.setInterval(호출할함수, 지연시간);

function startInterval() {
  setInterval(printCurrentDate, 2000);
}

function printCurrentDate() {
  document.getElementById("date").innerHTML += new Date() + "<br>";
}

//clearTimeout() 메소드
window.clearTimeout(timeoutID);

var timeoutId;

function startTimeout() {
  timeoutId = setTimeout(printCurrentDate, 2000);
}

function cancelTimeout() {
  clearTimeout(timeoutId);
}

function printCurrentDate() {
  document.getElementById("date").innerHTML += new Date() + "<br>";
}

//clearInterval() 메소드
window.clearInterval(timeoutID);

var timeoutId;

function startInterval() {
  timeoutId = setInterval(printCurrentDate, 2000);
}

function cancelInterval() {
  clearInterval(timeoutId);
}

function printCurrentDate() {
  document.getElementById("date").innerHTML += new Date() + "<br>";
}

//이벤트
// <!DOCTYPE html>
// <html lang="ko">

// <head>
// 	<meta charset="UTF-8">
// 	<title>JavaScript Event Concept</title>
// </head>

// <body>

// 	<h1>이벤트 타입</h1>
// 	<p onclick="changeText(this)">이 문자열을 클릭해 보세요!</p>

// 	<script>
// 		function changeText(element) {
// 			element.innerHTML = "문자열의 내용이 바뀌었습니다!";
// 		}
// 	</script>

// </body>

// </html>
