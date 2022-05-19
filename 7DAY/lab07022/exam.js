// /** 1.
//  * People
//  * this.name 프로퍼티를 갖게 된다.
//  * this.age 프로터티를 갖게 된다.
//  * this가 상황에 다라 가리키는 범위가 달라진다.
//  * 지금 현재 실행되는 영역의 바로 바깥을 가리킨다.
//  * 
//  */

// class People{
//     // 생성자는 값을 초기화 할 때 사용한다. 
//     constructor(name,age){ //생성자 생성
//         this.name=name;
//         this.age=age;
//     }
// show(){ //method
//     console.log(`${this.name}은 ${this.age}살 입니다`);
// } 
// }
//                           //생성자 호출
// const people = new People("구이경",20);
// people.show();






// /** 2.
//  *  간단한 객체 생성해 보기
//  */
// const name="iu";
// const age=30;

// //간단하게 객체를 생성하면 이렇게 값을 설정할 수 있다.
// const objVal = {
//     name:name,
//     age:age
// }

// function getObj(){
//     const name2 = "있지";
//     const getName2=function(){ //get
//         return name2; 
//     }
    
//     const setName = function(newName){ //set
//         name2 = newName; 
//     }

//     const printName = function(){ //출력
//         console.log(name2);
//     }

//     return {
//         getName2:getName2,
//         setName:setName

//         /**
//          * getName2(파라미터) : getName2 윗 함수 자체
//          * setName(파라미터): setName 윗 함수자체
//          */
//     }
// }
// // let obj2 = getObj();
// // console.log(obj2);

// // console.log(obj2.getName2());

// const obj3 = getObj();
// console.log(obj3);


// class Coffee{
//     constructor(type,price){
//         this.type=type;
//         this.price=price;
//     }
//     get type(){ //GET 메소드
//         return this._type;
//     }
//     set type(value){
//         this._type = value;
//     }
// }
// const coffee = new Coffee("라떼",5000);
// console.log(coffee.type);


function My(coffee) {
    this.coffee = coffee;
    this.printCoffee = function () {
      console.log(`내가 좋아하는 커피는? ${this.coffee}이다.`);
    };
  }
  
  function Your(coffee) {
    this.coffee = coffee;
    this.printCoffee = function () {
      console.log(`너가 좋아하는 커피는? ${this.coffee}이다.`);
    };
  }
  
  // 출력 해보기
  const my = new My('아메리카노');
  const your = new Your('라떼');
  my.printCoffee();
  your.printCoffee();
  
  your.printCoffee = my.printCoffee;
  your.printCoffee();
  my.printCoffee();