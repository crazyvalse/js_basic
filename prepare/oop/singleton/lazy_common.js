/**
 * Created by codingnuts on 2018/4/12.
 */
var getSingleton = function (fn) {
	var instance;
	return function () {
		return instance || (instance = fn.apply(this, arguments));
	};
};

//1. 单例
var ConfigSingle = getSingleton(function () {
	return {
		base_url: "http://www.baidu.com",
		columnId: 3
	}
});

var a = ConfigSingle();
var b = ConfigSingle();
//console.info(a, b, a == b);

var ConfigSingle2 = getSingleton(function () {
	return {
		base_url: "http://www.baidu.com2",
		columnId: 32
	}
});

//var c = ConfigSingle2();
//var d = ConfigSingle2();
//console.info(a, b, a == b);
//console.info(c, d, c == d);
//2. prototype

var getPerson = getSingleton(function (name, age, job) {
	var _Person = function (name, age, job) {
		this.name = name;
		this.age = age;
		this.job = job;
	};

	_Person.prototype.sayName = function () {
		console.info(this.name)
	};
	return new _Person(name, age, job)
});

var p1 = getPerson("Zelda", 100, "princess");
var p2 = getPerson();

p1.sayName();
p2.sayName();





