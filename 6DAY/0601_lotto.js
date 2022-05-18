//로또 만들어 보기
const SETTING = {
    name:"lotto",
    count:6,
    maxNum: 45
}

function playLotto(){
    const lottoset = new Set(); //Set 자료 구조 사용
    const {count, maxNum} = SETTING; 
    while (lottoset.size < count) {
        const randomNumber = parseInt(Math.random()*maxNum,10)+1; //,10 = 10진수로 변환해줌
        lottoset.add(randomNumber)
    }
    return Array.from(lottoset);
}
console.log(playLotto());
//playLotto().sort((a,b) => a-b); //오름차순
console.log(playLotto().sort((a,b) => b - a)); //내림차순