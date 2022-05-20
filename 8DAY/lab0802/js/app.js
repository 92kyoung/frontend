// /**1.
//  * 생성자 생성
//  * 
//  */
// const card = {};
// card.suit = "하트";

// card.rank = "A";
// console.log(card);
// function Card2(suit,rank){
//     this.suit= suit;
//     this.rank= rank;
// }
// //                생성자
// const card2 = new Card2("클로버","A");
// console.log(card2);

// class Card3{
//     constructor(suit,rank){
//         this.suit= suit;
//         this.rank= rank; 
//     }
// }
// const card3 = new Card3("다이아몬드","3");
// console.log(card3);



// //2.
// /**
//  * typeof 연산자
//  * - 타입을 확인해서 데이터 타입을 텍스트 형태로 알려준다.
//  * - 객체: object
//  * - string, number, boolean, function
//  * - symbol, undefined
//  */
// let s = " 밥먹고 졸리다";
// console.log(typeof s);

// let s2 = new Array();
// console.log(typeof s2);

// let s3 = new Date();
// console.log(typeof s3);

// let s4 =20;
// console.log(typeof s4);



// //3.
// /**
//  * instance of 연산자
//  * instance of 연산자는 지정한 객체의 포로토타입 체인에 
//  * 지정한 생성자의 프로토타입 객체가 포함되어 있는지 확인한다.
//  * 
//  */

// function Func(){};
// const obj = new Func();
// console.log(obj instanceof Func); //true
// console.log(obj instanceof Object); //true
// console.log(obj instanceof Date); //false
