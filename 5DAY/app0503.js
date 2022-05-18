/**
 * 명명법
 * 
 * 카멜(camel) : 소문자로 시작해서 의미가 바뀌는 단어의 첫글자가 대문자로 바뀌고 다시 소문자 ex)let coffeType, makeCoffee(){}
 *              함수,변수,메소드
 * 파스칼(pascal) : 대문자로 시작해서 의미가 바뀌는 단어의 첫글자가 대문자로 바뀌고 다시 소문자 ex) class UserInfo{}, function Person(){}
 *              생성자,클래스
 * lower (전체소문자) : 전체를 소문자로 ex) let,const 와 같은 키워드 / 예약어
 * upper (전체대문자) : 전체를 대문자로 ex) const PI=3.14; const PI = Math.PI; / 상수
 *
 */

/**
 * 데이터 타입의 분류
 * 1) 기본타입(primitive type): int,String,boolean,undefined,null
 * 
 * 2) 참조타입(reference type): object, primitive type이 아닌것
 *                    object type
 * 기본타입을 제외한 모든 타입은 참조(객체) 타입이다.
 * 
 * pass by value
 * assignm by value
 * immutable(값을 할당하고 값을 받음/ 안바뀜)
 * 
 * pass by reference
 * assign by reference
 * mutable(주소를 가지고 있고 주소를 받는다 / 안에 있는 값이 바뀌면 영향을 받는다)
 * 
 */

// // 기본 타입 예제
// let a =10;
// let b=a;
// b=20;
// // b 값만 바뀌고 a 값은 안바뀜
// console.log(a,b);

// //참조 타입 pass by reference
// let list = [1,2,3,4,5];
// let list2 = list;
// console.log("list=",list,"list2=",list2);
// list2[2]=100;
// //list2만 바꿨는데 list에도 영향을 미쳤다
// console.log("list=",list,"list2=",list2);



/**
 * undefined 값이 나오는 경우
 * : 존재하는데, 값이 없을 경우 
 * -값을 아직 할당받지 못한 변수의 값
 * -없는 객체의 프로퍼티를 읽으려고 시도했을 때의 값
 * -없는 배열의 요소를 읽고 열고 시도했을 때의 값
 * -아무것도 반환하지 않는 함수가 반환하는 값
 * -함수를 호출 했을 대 전달받지 못한 인수의 값
 * 
 */

//console.log("하이");  //브라우저 콘솔에서 실행하면 undefined 나옴

/**
 * 리터럴 객체의 프로퍼티 값 확인하기
 */

// const coffee = {
//     type: "Americano",
//     price: 4000
// };

// console.log(coffee.price);
// console.log(coffee.sirup); //없는 속성값 undefined
// coffee.sirup="설탕많이"; // 프로퍼티 추가

// console.log(coffee); 
// console.log(coffee.sirup); 

// delete coffee.price;
//console.log(coffee);


// 해당 객체에 프로퍼티가 있는지 확인하는 연산자
// 자바스크립트에서는 " "와 ' '가 동일
// console.log("price" in coffee); //true
// console.log("type" in coffee);  //true
// console.log("toString" in coffee); // toString  //true

// coffee 객체에는 없는 속성이지만 js 최상위 객체인 Object에 있는 속성은 사용할 수 있기 때문에 (상속받기 때문에) toString도 true가 나온다.

// console.log("toString" in coffee);



// // 템플릿 리터럴
// //역따옴표(숫자 1 앞에 있는 키 ) `` 로 묵은 문자열을 말한다.
//  let strTemplate=`오늘도 아직도 3시간이나 남았네,,`;
//  console.log(strTemplate);


// // 줄바꿈 표시 해보기(\n)
//  let strTemplate2=`오늘도 아직도\n3시간이나 남았네,,`;
//  console.log(strTemplate2);


/** 보간 표현식
 * 
 * 탬플릿 리터럴 안에 플레이스 홀더를 넣을 수 있다.
 * 플레이스 홀더는 ${....}로 표시가 된다.
 * 플레이스 홀더: 실제 값을 나중에 넣기 위해 확보한 장소
 * 
 * ${}를 활용하여 문자열 안에 변수나 표현식의 결괏값을 삽입할 수 있다.
 */

let a=2, b=3; // 한줄에 변수 두개를 선언할 수 있다.
console.log(a+"+"+b+"="+(a+b));
console.log(`${a}+${b}=${a+b}`); //플레이스 홀더를 사용하여 위의 식보다 더 간단하게 코드를 작성할 수 있다.

let now= new Date();
console.log(`오늘은 ${now.getMonth()+1}월 ${now.getDate()}일 입니다`);  //월(getMonth)은 0부터 설정되어있어서  꼭 +1를 해주어야한다. 

// // 문자열 리터럴
// let str = String.raw `오늘은 집에 가면 잠을 잘 자고 싶다`;
// console.log(str);


// //const 사용하는 방법
// // 상수 값을 할당한다.
// const people = {
//     userName:"손흥민",
//     age: 31
// }

// people.userName="iu";// 가능1
// //const로 선언했는데 값이 바귀는 이유는?
// // 다시 할당만 안되고. 안에 내용을 수정하는 것은 된다.
// console.log(people); //가능1


// // 새롭게 {} 이렇게 해서는 사용 불가능
// people = {
//     userName:"블랙핑크",
//     age: 30
// }
// console.log(people);


//const 예제 하나 더 확인
const list = [1,2,3,4,5];
console.log(list);
list[2]=100;
console.log(list);