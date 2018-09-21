/**
 * Created by codingnuts on 2018/9/18.
 */
//发送Get请求
const http = require('http'),
	moment = require('moment'),
	start = new Date();

let count = 0;

function send () {
	http.request({
			hostname: 'localhost',
			port: 7300,
			path: '/mock/5b9f6b7a223b970017af92e8/example' + ["/", "/mock", "/query"][Math.floor(Math.random() * 3)],
			method: 'GET'
		},
		function (res) {
			res.setEncoding('utf-8');
			res.on('data', function (chunk) {
				if (chunk && typeof chunk == "string") {
					console.info(moment(new Date().toUTCString()).format("hh:mm:ss"), "------",
						moment(start.toUTCString()).fromNow(true), "------",
						chunk);
				}
			});
		}).on('error', function (err) {
		console.error(err);
	}).end();

}
//创建请求

for(let i = 0 ; i < 20; i ++) {
	setInterval(send, 500);
}

