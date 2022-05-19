import {log,getTime,getCurrenHour, myLogger2} from './myLogger.js';

const root = document.querySelector("#root");
root.innerHTML = `<p>hello world</p>`;
log("내가 만든 임포트 익스포트 데이터");

log(getTime());
log(getCurrenHour());
log(`getTime is ${getTime()}`);
log(`getCurrentHour is ${getCurrenHour()}`);

const logger = new myLogger2();
log(`lectures of poly are ${logger.getLectures()}`);
