/**
 * Created by codingnuts on 2018/9/18.
 */
const moment = require("moment"),
	start = new Date();


console.info(start.toUTCString() , moment(start.toUTCString()).fromNow())