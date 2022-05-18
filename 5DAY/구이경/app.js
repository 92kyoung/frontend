   document.addEventListener('DOMContentLoaded',()=>{
  //주어진 문자열과 일치하는 id 속성을 가진 요소를 찾고, 이를 나타내는 Element 객체를 반환
  //id는 유일해야한다.
    let doc = document.getElementById("start");
    
   let lotto=[];
   while(lotto.length<6){
    //1~45 사이의 정수 난수 출력
    let lotto_num=parseInt(Math.random()*45)+1;
    if(lotto.indexOf(lotto_num)<0){  //해당 숫자가 존재하지 않으면 -1이 출력된다
        lotto.push(lotto_num); //존재하지 않으면 해당 숫자를 lotto에 넣는다.
    }
   }
   
   doc.innerHTML= (`이번주 로또 예상 번호는 ${lotto}입니다`);
});