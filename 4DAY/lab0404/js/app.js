/**
 *  자바스크립트
 * -웹에서 동적으로 데이터나 dom을 조작하기 위한 언어
 * -웹에서 사용하는 클라이언트(browser) 및 서버(Node.js)용 언어
 * 
 *  자바스크립트(VanillaJS)
 * -현자는 자바스크립트 라이브러리나 프래임워크와 함께 사용이 된다.
 * -Angular(Google)  -React.js(Meta, facebook) - Vue.js(EvanYou) -Typescript -Svelte
 * -jQuery: java - SpringFramework 같은 거와 비슷하다. 역할 상 자바스크립트가 해야할 많은 내용을 간단하게 사용할 수 있도록 구현된 라이브러리
 * 
 */


//자바스크립트에서 일반적으로 말하는 객체
// 자바스크립트에서 중요한 것은 객체를 구성하는 모양
// 1. 아래와 값은 형태의 객체는 가장 일반적이기도 하지만 이를 literal(값) 형태의 객체


// let coffee={
//     type: "라떼",
//     price:5000
// }

// console.log(coffee);
//2.아래의 방식보다 위의 방식이 더 좋음

// let coffeeType="라떼";
// let coffePrice=5000;
// console.log(coffeeType);
// console.log(coffePrice);

// let coffee={
//     type:"Americano",
//     price:4000
// }

// 3. 리터럴 객체에서 값을 가져오는 방법
// console.log(coffee.type);
// console.log(coffee.price);

// console.log(coffee["type"]);
// console.log(coffee["price"]);

// 4. 리터럴 객체에 없는 속성을 가져올 경우
// console.log(coffee.name); //undefined 값을 가져온다.


// 5. 그낭 빈 객체를 선언 할 경우
// let obj={};

// console.log(obj); // {} 출력됨

// 6. 변수나 객체를 선언할 대 사용하는 선언자
// let: 값을 다시 할당해도 되고, 
        // {} 안에서만 값이 유용하다.
//         local variable
//const:변하지 않는 상수 값을 정의 할 대 사용한다. const로 선어한 변수에 값을 다시 할당하게 되면 오류가 발생한다.
// ex) const PI = 3.14, const LOCAL_URL="https://naver.com";


// const coffee1 = {
//     type:"capuccino",
//     price: 6000
// }

// 7. javascript 를 사용할 떄 맨 마지막 문장에는 ';'를 붙여준다. 
// console.log("하이~");




//8. 자바스크립트에서는 대소문자를 반드시 구분해야한다.
console.log("하이");
Console.log("하이");

