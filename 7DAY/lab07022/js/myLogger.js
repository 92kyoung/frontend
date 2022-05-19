// log 함수를 다른 곳에서도 사용하기 위해서
//  export를 사용한다.

export function log(data){
    console.log(data);
}

//오늘 날짜 
export const getTime = () => {
    return Date.now();
}


//현재시간
export const getCurrenHour = () => {
    return (new Date).getHours();
}

// class 생성
export class myLogger2{
    constructor(props){
        this.lectures=['JavaScript','HTML','CSS3'];

    }
    getLectures(){
        return this.lectures;
    }

    getTime(){
        return Date.now();
    }
}