// const element = document.querySelector("p");
// const myObj = {
//     register(){
//         element.addEventListener("clcik",function(evt){
//             this.printData();
//         });
//     },
//     printData(){
//         console.log("print data");
//     }
// }
// myObj.register();


//전에 사용했던 arrow fuction을 사용해보자.

const element = document.querySelector("p");
const myObj = {
    register(){
        element.addEventListener("click",(evt) => {
            this.printData();
        },1000);
    },
    printData(){
        console.log("clicked~~");
    }
}
myObj.register();