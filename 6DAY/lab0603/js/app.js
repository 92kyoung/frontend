// // arrow function(화살표 함수)

//1.
// //브라우저에서 테스트 할 수 있는 api입니다.
// //setTimeout
// setTimeout(function(){
//     console.log("화살표 함수입니다.");
// },1000); //1초 있다가 출력하세욤 , 1000=1초 (ms로 하기 때문)

// but 이렇게 작성을 하면 function을 만들어야 하기 때문에 좀 더 간단하게 작성해보자.

// setTimeout(()=>{
//     console.log("화살표");
// },1000);


// //2.
// //일반적인 함수
// const simpleFunc = function(){
//     console.log('simple function');
// }

// simpleFunc();

// //화살표 함수는 anonymous 함수이다.
// 아규먼트가 없는 화살표 함수
// const simpleFunc2 = () => console.log("simple2");
// simpleFunc2();

// // 아규먼트가 있는 화살표 함수
// const add = (a,b) => a+b;
// console.log(add(1,2));

// // function 보다 화살표 함수가 더 간단한 형태를 띈다.
// const add1=function(a,b){
//     return a+b;
// }



//3.
// // default parameter(디폴트 파라미터)

// //es6에서 추가됨
// // function showMessage(message,from="IU"){
// //     console.log(`${message} BY ${from}`)
// // }
// // console.log(showMessage(`안뇽~~~~`,`손흥민`));

// //es6 전 코드 // 위의 코드와 동일
// function showMessage2(message,from){
//     if(from === undefined){
//         from='iu';
//     }
//     console.log(`${message} BY ${from}`);
// }
// showMessage2(`안녕`);


/**
 *  반목분 for문
 *
 * for(let i=0; i<length; i++){
 * 
 * }
 * 
 * 조건문 if문
 * if(조건식){
 * }
 * else {
 * }
 * 
 * 반복문 while
 *  
 * while(조건식){
 *  조건식이 참일 경우에만 이 문장을 반복한다. 
 * }
 * 
 * 반복문 do ~ while()
 *  do {
 *   최소한 한번, 이 부분은 실행된다.
 *   그리고 조건식을 만족하면 계속 실행
 * } whie(조건식)
*/



// //4.
// /**
//  * Rest Parameter
//  * 표현 : ...args
//  * Rest 파라미터는 배열 형태로 값을 전달한다.
//  */
// // for tool 사용. for치고 두번째에 있는거 엔터
// // function printArr(...args){
    
//     for (let i = 0; i < args.length; i++) {
//         console.log(args[i]);
        
//     }
// }
// printArr('자바스크립트','자바','스프링');


// // for문에서 of 연산자 사용할 수 있음
// // ... of 값이 잇으면 쭉~ 뽑아내라.
// function printArr(...args){
    
//     for (const arg of args) {
//         console.log(args[i]);
        
//     }
// }
// printArr('자바스크립트','자바','스프링');





