// document.querySelector("div").addEventListener("click",function({target}){
//                                                                 //target: 현재 내가 가르키고 있는 객체를 의미
//           //event e
             // target - element(이경우에서는 <div>)
//     //console.log(target.tagName); // div 태그 자체를 가져옴
//     console.log(target.innerText); // div 태그 안에 있는 텍스트를 가져옴
// });

// document.querySelector("div").addEventListener("click",function({type}){

//     console.log(type); // div 태그 안에 있는 텍스트를 가져옴
// });

/**
 *  타입을 확인해보고 싶으면 type이라는 이름을 주고 출력해야한다.
 *  (event type) -> ex) click
 *  target, type 은 지정된 예약어라서 다른 이름으로 받아올 수 없다.(오타 쓰면 오류남)
 */

document.querySelector("div").addEventListener("click",function({type,target}){

    console.log(type,target.tagName); // div 태그 안에 있는 텍스트를 가져옴
});


