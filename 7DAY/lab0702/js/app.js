import PolytechLec from './PolytechLec.js';
import util from './utility.js';

const root = document.querySelector("#root");
root.innerHTML = `<p>hello world</p>`;
util.log("내가 만든 임포트 익스포트 데이터");

const pt = new PolytechLec();
util.log(`current hour is ${pt.getCurrentHour()}`);
util.log(`lectures of Polytech are ${pt.getLectures()}`);

// util.log(getTime());
// util.log(getCurrenHour());
// util.log(`getTime is ${getTime()}`);
// util.log(`getCurrentHour is ${getCurrenHour()}`);

//const logger = new myLogger2();
//log(`lectures of poly are ${logger.getLectures()}`);
