/**
 * 함수를 선언하고 사용하기
 */


// //1. 함수 선언, 리턴타입이 없는 함수
// function add(a,b){
//     console.log(a+b);
// }

// // 함수를 호출
// add(2,3)


// //2. 리턴타입이 있는 함수
// function multiple(a,b){
//     return (a*b);
// }

// //first class object
// console.log(multiple(3,4));


// 3.함수에서도 hoisting이 된다.
//선언을 아래에서 해 놓아도 위에서 호출할 수 있다.
coffeeMachine("라떼",4000);

function coffeeMachine(type,price){
    console.log(`${price}인 ${type} 커피가 나왔습니다`);
}

//4. 함수를 만들면 얻을 수 있는 장점
// 1) 재사용이 가능하다.
// 2) 만든 프로그램을 이해하기 쉽다.
// 3) 프로그램 수정이 간단해진다.



// 4-1.함수 표현 방법
//1.함수 선언문으로 정의하기
function square(x){
    return x*x;
}
// 2.함수 리터럴로 정의하기
const square2 = function(x){
    return x*x;
}

//3.Function 생성자로 정의 방법
const square3 = Function("x","return x * x");

//4.화살표 함수 (arrow function) 표현식으로 정의하는 방법
const square4 = x => x * x;

// //5. 즉시 실행함수
// (function(){})();
// //즉시 실행함수도  인자값(아규먼트)를 전달할 수 있다.
// (function(a,b){})(1,2);
// //즉시 실행함수에도 이름을 붙일 수 있지만, 함수 내부에서만 유효하다.
// (function square5(n){
//     return x * x;
// })(3);

//6. 함수 정의식을 함수값으로 만들 수 도 있다.
console.log(
(+function(){
    return 1+1;
}()));


