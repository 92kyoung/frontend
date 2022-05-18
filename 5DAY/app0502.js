// var hoisting test(var 호이스팅)
//어디에 선언했던지 간에 최상위로 끌어올려서 실행한다. 사용을 안하는 것이 좋음

//console.log(testVar); //undefined

//var로 선어되어 있지 않아도
// 변수명 = 값  이렇게 할다잉 되면 var testVar =2 ; 로 할당된것 처럼 동작한다.

// testVar = 2;

// var testVar;

// console.log(testVar); //2


//오류 발생
//선언이 먼저 안되어 있고 호출한 경우
console.log(testVar4);
testVar4 = 10; 


//undefined 선언은 되어있지만 출력전에 값이 지정되어 있지 않기 때문에 언디파인디드가 나온다.
console.log(testVar4); //실행순서:2
testVar4 = 10; //3
var testVar4; //1


{
    //로컬 변수
    // {} 안에서만 사용이 가능하다.
    let age=20;
    console.log("inner:"+age);
}
//에러 발생 // let은 이 묶음 안에서만 존재한다.  콘솔.로그도 이 묶은 안에 있어야 한다. 
//console.log("outer:"+age);


{
    age2=30;
    var age2;
}
//var는 나옴
console.log(age2);