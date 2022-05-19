//class
/**
 * export default 를 해야 다른 곳에서 사용이 가능하다. 
 */
export default class PolytechLec{
    constructor(props){
        this.lectures=['JavaScript','HTML','CSS3'];

    }
    getLectures(){
        return this.lectures;
    }
    getCurrentHour(){
        return (new Date).getHours();
    }
    getTime(){
        return Date.now();
    }
}