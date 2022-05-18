// 이벤트 처리 순서

// 1) 객체를 찾고(element, object)
// 2) 이벤트를 생성하고
// 3) 객체에 붙인다.(AddEventListner)

 
// 이벤트 처리 방법

// 1) 이벤트 처리기를 등록하는 방법
//   <input type="button" onclick="changeColor()"/ >
// 2) DOM 요소 객체의 이벤트 처리기 프로퍼티에 설정
//   const btn = document.getElementById("btn"); // id 값을 가지고 있음
//   const btn = document.querySelector("#btn"); // id 값을 가지고 있음
//   const btn = document.querySelector(".colorBox"); // class를 가지고 있음
  
//   btn.onclick = changeColor();
  
//   3) addEventListener  메소드를 사용하는 방법
//   const btn1 = document.getElementById("btn"); // id 값을 가지고 있음  //getElementById는 아이디만 받기 때문에 굳이 # 안 씀
//   const btn1 = document.querySelector("#btn"); // id 값을 가지고 있음  // #id 
//   const btn1 = document.querySelector(".colorBox"); // class를 가지고 있음  //.class
  
//   - btn1.addEventListener("click",changeColor,false);
//   - btn1.addEventListener("click",function(){
//              실행 코드
//   });

//   - btn1.addEventListener("click",()=>{
//              실행 코드
//   });



document.addEventListener("DOMContentLoaded",()=>{
    //alert('잘들어오나'); // 이벤트 연결 잘 됬나 확인
    // querySelector 를 사용하면 괄호 안에 들어오는 값이 아이디, class든 상관없기 때문에 getElementById 보다 더 많이 사용
    const boxEle = document.querySelector("#box"); // 박스 엘리먼트 객체 생성 // 아이디 box
    const colorBoxEle = document.querySelector(".colorBtn"); // 아이디 box
    const btnEle = document.querySelector("button"); // 아이디 box


    //각각의 element에 이벤트를 연결시켜준다.
    boxEle.addEventListener("click",function(e){
        e.currentTarget.style.backgroundColor="red";
    });

    colorBoxEle.addEventListener("click",function(e){
        e.currentTarget.style.backgroundColor="blue";
    });

    btnEle.addEventListener("click",function(e){
        e.currentTarget.style.backgroundColor="grey";
        e.currentTarget.style.padding="10px 20px";
    });

});































