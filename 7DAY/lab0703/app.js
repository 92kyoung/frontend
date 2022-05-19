/**
 * arrow function 을 확인해본다.
 * arrow function으로 사용할 api가 setTimeout이라
 * web brower 띄우고 javascript를 실행한다.
 * 
 */

// setTimeout(function(){
//     console.log("hi");
// },1000);

// setTimeout(()=>{
//     console.log("hi2");
// },2000);





// //this context of arrow function
// const myObj = {
//     runTimeout(){
//         setTimeout(function(){
//             // 지금 이 영역에서의 this는 window 이다.
//             console.log(this === window); //true
//         });
//     }
// }

// myObj.runTimeout();  //myObj의 runTimeout 함수를 실행




// 자 그럼 이제 다른 코드를 실행해 봅시다.




// const myObj = {
//     runTimeout(){
//         setTimeout(function(){
//             // 지금 이 영역에서의 this는 window 를 가르키고 있기 때문에
//             // window.printData()라는 function은
//             // 존자해지 않기 때문이다
//             console.log(this === window); //true
//         });
//     }
// }

// myObj.runTimeout();  //myObj의 runTimeout 함수를 실행


// const myObj = {
//     runTimeout(){
//         setTimeout(function(){
//             // 지금 이 영역에서의 this는 window 를 가르키고 있기 때문에
//             // window.printData()라는 function은
//             // 존자해지 않기 때문이다
//             this.printData(); 

//         }.bind(this),1000);
//     },
//     printData(){
//         console.log("PRINT DATA")
//     }
// }

// myObj.runTimeout();  //myObj의 runTimeout 함수를 실행


// const myObj = {
//         runTimeout(){
//             setTimeout(function(){
//                 // 지금 이 영역에서의 this는 window 를 가르키고 있기 때문에
//                 // window.printData()라는 function은
//                 // 존자해지 않기 때문이다
//                 this.printData(); 
    
//             }.bind(this),1000);
//         },
//         printData(){
//             console.log("PRINT DATA")
//         }
//     }
    
//     myObj.runTimeout();  //myObj의 runTimeout 함수를 실행

 

//bind() 함수 말고 arrow fuction을 적용해보자
// bind() 를 생략한 상태에서도 this가 context를 유지하고 있다고 생각하면된다
// 그래서 PRINT DATA 가 나오게 된 것 이다.
// arrow function은 context를 유지해주기 때문이다. 
const myObj = {
        runTimeout(){
            setTimeout(()=>{
                this.printData(); 
    
            },1000);
        },
        printData(){
            console.log("PRINT DATA")
        }
    }
    
    myObj.runTimeout();  //myObj의 runTimeout 함수를 실행
    


    