// 배열 (array)
/**
 *  여러개의 값을 나열해서 저장해놓은 것
 *  저장된 데이터에 index가 부여되어 index로 접근한다.
 */


//1.
// // 배열은 참조 타입
// const arr = [2,4,6,8];
// const arr1 = ["2","4","6","8"];

// // //빈 배열 선언
// // const empty = []
// // console.log(empty);  // []

// // // 배열 요소 중에서 일부를 생략하면 그 요소는 생성되지 않는다.
// // const arrRst= [2, ,4]; 
// // console.log(arrRst);  // [ 2, <1 empty item>, 4 ]

// // 배열 값에는 기본타입, 참조타입. 어떤 타입이라도 올 수 있다
// const arrData = [3.14,"pi",{x:1 , y:1},[1,2,3,4]];
//                       // 문자열, 참조 타입, 객체 다 가능

// //배열의 length 프로퍼티는 요소의 개수를 리턴한다.
// console.log(arrData.length); //4개의 요소 존재


// //2.
// // 배열의 length 프로퍼티에 현재 배열들의 갯수보다 작고 0보다 큰 정수 값을 넣으면 배열의 길이가 줄어든다.
// const arrLength = ["A","B","C","D"];
// console.log(arrLength.length);  //4
// arrLength.length=2;
// console.log(arrLength); // [ 'A', 'B' ]



// //3.
// // 배열에 없는 요소 값을 대입 하면 그 요소가 새롭게 추가된다.
// const arr3 = ["a","b","c"];  // 위치: 0,1,2 
// arr3[3]="d";
// console.log(arr3);


// //4.
// // push 메소드를 사용하면 요소를 배열 끝에 추가할 수 있다.
// const arr4= ["a","b","c","d"];
// arr4.push("e");
// console.log(arr4);


// //5.
// // delete 연산자를 사용해서 특정 배열 요소를 삭제 할 수 있다.
// const arr5= ["a","b","c","d"];
// delete arr5[1];
// console.log(arr5);
// //배열 요소를 삭제하면 해당 공간만 비어있고, 배열의 길이는 줄어들지 않는다.
// console.log(arr5.length);


// //6.
// // const와 immutable array 확인해 보기
// function fruit(){
//     const list = ["apple","bannana","orange"];
//    list = "podo"; //할당 안됨 에러남
// }
// //fruit();
// //6-1.const로 정한 배열값에 값을 추가해보자
// function fruit2(){
//     const list = ["apple","bannana","orange"];
//     console.log(list);
//     list.push("podo");  /push 사용해서 배열에 값을 추가하귀~
//     console.log(list);
// }
// fruit2();

// //7.배열 비교
// const list2 = ["apple","bannana","orange"];
// list3=[].concat(list2,"watermelon"); //list2 배열 값에 watermelon을 추가한 새로운 list3 배열 생성
// console.log(list2,list3);
// //list2와 list3를 비교해보자
// // 값도 같고 타입도 값아서 아주 완벽하게 똑같을 때
// // ==(x)  ,  ===(0)
// //비교하는 것이 동치(===)이다.
// console.log(list2===list3); //false


//8. javascript에서 값을 비교해보기 
// ==은 값만 같으면, === 값과 타입이 모두 같을때
// console.log(null==undefined); // true
// console.log(null===undefined); // false
// console.log(1=="1");           // true
// console.log(1==="1");           // false //타입 불일치
// console.log("0xff"==255);      // true
// console.log(true==1);          // true
// console.log(true=="1");        // true
// console.log((new String("a")) == "a"); // true
// console.log((new Number(2)) == 2 );    // true
// console.log([2]==2);                  // true
// console.log(isNaN("NaN")); // true
// console.log(isNaN("NAN")); // true
// console.log(isNaN(NaN));   // true
// console.log(NaN===NaN);    // false
// console.log(null===undefined); // false
// console.log(1==="1");          // false
// console.log("0xff"===255);     // false
// console.log(true===1);         // false
// console.log(true==="1");       // false
// console.log((new String("a"))==="a"); // false
// console.log(new Number(2)===2);       // false
// console.log([2]===2);   


// //9.
// // Destructuring : 비구조화 할당
// // 변수에 필요한 값을 할당하는데 매유 유용한 방법
// let data=["crong","coffee","bat"];

// // 데이터를 가져오려면 

// // 방식1 
// let data1=data[0];
// let data2=data[2];

// //방식 2 : Destructuring 은 이렇게 처리
// let [data3,date4]= data;  // 얘는 연속 적인 위치만 가능??

// console.log(data3,date4);
// console.log(data1,data2);


// //10.
// //Destructuring object
// let obj = {
//     name: "bts",
//     address: "korea",
//     age: 20
// };

// // let [name2,age]=obj  // error
// // console.log(name2,age);

// let {name:myName,age:myAge}=obj;
// console.log(myName,myAge);



// //11.
// var news = [
//     {
//         "title":"sbs",
//         "imgurl":"http://static.naver.net/newsstand/2017/0313/article_img/9054/173200/001.jpg",
//         "newslist":[
//              "[가보니] 가상 경주도 즐기고, 내 손으로 자동차도 만들고",
//              "리캡차'가 사라진다.",
//              "갤럭시S8’ 출시? ‘갤노트7’ 처리 계획부터 밝혀야",
//              "블로코-삼성SDS, 블록체인 사업 ‘맞손’",
//              "[블록체인 톺아보기] 퍼블릭 블록체인의 한계와 프라이빗 블록체인"
//         ]
//     },
//     {
//         "title":"mbc",
//         "imgurl":"http://static.naver.net/newsstand/2017/0313/article_img/9033/220451/001.jpg",
//         "newslist":[
//              "Lorem ipsum dolor sit amet, consectetur adipisicin",
//              "ipsum dolor sit amet, consectetur adipisicin",
//              "dolor sit amet, consectetur adipisicin",
//              "amet, consectetur adipisicin"
//         ]
//     }
// ];

// let [,mbc1] = news; // 위치에 맞겠금 ,로 표시
// console.log(mbc1);

// let {title,imgur1}=mbc; //error
// console.log(title,imgur1);

// let [,{title,imgurl}]= news;
// console.log(title);
// console.log(imgurl);

// //새롭게 이름을 지정해주고 싶으면 ' : 새로운 이름 ' 이렇게 설정한다.
// let [,{title:title2, imgurl2}]= news;
// console.log(title2);
// console.log(imgurl2);


// //12.
// //함수를 호출하는 방법 추가
// // obj.m (); : 이 객체의 m 프로퍼티 메소드라고 한다. 
// let obj={};
// obj.m = function(){
//     console.log("함수 추가하기")
// }
// obj.m();


