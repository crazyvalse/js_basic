/**
 * Created by codingnuts on 2018/4/12.
 */
/*var getSingleton = function  () {
	var instance;
	return function (fn) {
		return instance || (instance = fn.apply(this, arguments));    //b.
	};
}();

var Config = getSingleton(function () {
	return {
		base_url: "http://www.baidu.com",
		columnId: 3
	}
});

var Config2 = getSingleton(function () {
	return {
		base_url: "http://www.baidu.com2",
		columnId: 32
	}
});

console.info(Config);
console.info(Config2);*/


/*
var getSingleton = function  () {
	var instance;
	return function (fn) {
		return instance || (instance = fn.apply(this, arguments));    //b.
	};
};

function Config() {
	return {
		a: 123
	}
}

function Config2() {
	return {
		a: 1232
	}
}

var c = getSingleton()(Config);
var c2= getSingleton()(Config);

var c3= getSingleton()(Config2);


console.info(c == c2)*/

//1. 声明function
var getSingleton = function  (fn) {
	var instance;
	return function () {
		if(!fn || fn instanceof Function){
			throw new Error("fn 不是function！");
		}
		return instance || (instance = fn.apply(this, arguments));    //b.
	};
};

//声明了config
function Config() {
	return {
		a: 123
	}
}
//声明了config
function Config2() {
	return {
		a: 1232
	}
}

var ConfigFunction = getSingleton(Config);    //a. 初始化instance_0； b. 缓存了fn_0
var Config2Function= getSingleton(Config2);   //b. 初始化了新的 instance_1; b. 缓存了新的fn_1
var c1 = ConfigFunction();
var c2 = ConfigFunction();

var c3 = Config2Function();
var c4 = Config2Function();
console.info(c1, c2, c1 == c2);
console.info(c3, c4, c3 == c4);
/*
*/

