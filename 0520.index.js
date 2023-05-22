    let Title = document.getElementById('title');
    Title.addEventListener("click",Tellus);

    let btn = document.getElementById('testbtn');
    btn.addEventListener("click", clickBtn);
    btn.addEventListener("mouseover", mouseoverBtn);
    btn.addEventListener("mouseout", mouseoutBtn);

    function Tellus () {
        alert('제목이 클릭되었어요!');
    }

    function clickBtn() {
        btn.removeEventListener("mouseover", mouseoverBtn);
        btn.removeEventListener("mouseout", mouseoutBtn);
        document.getElementById("text").innerHTML = "이벤트 리스너가 삭제되었어요!";
    }

    function mouseoverBtn() {
        document.getElementById("text").innerHTML = "버튼 위에 마우스가 있네요!";
    }

    function mouseoutBtn() {
        document.getElementById("text").innerHTML = "버튼 밖으로 마우스가 나갔어요!";
    }




str = "실수!"; //자동으로 전역 변수로 설정
console.log(str);

function StrictBlock() {

    "use strict"  // 함수 블록만을 strict 모드로 설정함.

    try { //예외 처리를 원는 코드
        hello = '안녕' //선언되지 않은 변수를 사용했기 때문에 오류발생;
    } catch (error) { //예외가 발생했을 경우 실행되는 코드
        console.log(error);
    } finally { //무조건 실행됨
        console.log('이 부분은 에러가 나도 실행이 됩니당!');
    }

}

StrictBlock();

