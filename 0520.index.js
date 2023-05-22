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




str = "실수!";
console.log(str);

function StrictBlock() {

    "use strict"  // 함수 블록만을 strict 모드로 설정함.

    try {
        hello = '안녕'
    } catch (error) {
        console.log(error);
    }

}

StrictBlock();
