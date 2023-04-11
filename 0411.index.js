//location 객체
document.write("현재 문서의 주소는" + location.href + "입니다");

//현재 문서의 호스트 이름
document.write("현재 문서의 호스트 이름은" + location.hostname + "입니다");

//현재 문서의 파일 경로명
document.write("현재 문서의 파일 경로명은" + location.pathname + "입니다");

//현재 창에 문서 불러오기
function openDocument() {
  location.assign("/index.php");
}
function openDocumentWithReplace() {
  location.replace("/index.php");
}

//History 객체
function openDocument() {
  location.assign("/javascript/js_bom_history");
}
document.getElementById("text").innerHTML =
  "현재 브라우저의 히스토리 목록의 개수는" + history.length + "개 입니다";

//히스토리 목록 접근하기

//back 메소드
<button onclick="goBack()">이전 페이지로 가기</button>;

function goBack() {
  window.history.back();
}

//go 메소드
<button onclick="go()">이전 페이지로 가기</button>;

function go() {
  window.history.go(-1);
}
