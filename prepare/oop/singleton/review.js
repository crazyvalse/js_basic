/**
 * Created by codingnuts on 2018/4/18.
 */

var LazyLoader = function (fn) {
	var instance;
	return function () {
		return instance || (instance = fn.apply(this, arguments));
	};
};

var Config = LazyLoader(function () {
	return {
		base_url: "http://172.19.32.152",
		column_id: 32
	}
}); // 1, undefined


var a = Config();   // 2, undefined
var b = Config();   // 2, {}

console.info(a, b, a === b);


/*var a = [
 1,
 2,
 {
 a: "A",
 b: "B"
 },
 4
 ];
 var b = a.slice();
 var c = JSON.parse(JSON.stringify(a));
 c[2].a = 666;
 console.info(a);
 console.info(c);*/

/*var a = "你好";
 var s = `hello
 World!${a}`;

 console.info(s);*/

/*function a () {
 var msg = "hello",
 b = "b",
 c = "c",
 d,
 e;

 }*/










