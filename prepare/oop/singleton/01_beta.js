/**
 * Created by codingnuts on 2018/4/12.
 */
// 3. 命名空间
var namespace = {

};

// 2. 静态变量
// 定义了之后，就不能被改变
// 1. 不能被暴露出来 - 在方法里面;
// 2. 不能被直接调用 - 使用方法来调用;

var STATIC_VARIABLE = (function () {
	var _state = {
		BASE_URL: "http://www.baidu.com",
		columnId: 123
	};

	return {
		get: function (name) {
			return _state[name];
		}
	}
})();

//console.info(STATIC_VARIABLE.get("BASE_URL"));

// 3. 懒加载
// 1. 不能被暴露出来 - 在方法里面;
// 2. 不能被直接调用 - 使用方法来调用;
// 3. 只有在首次需要的时候被加载； -
// 4. 以后始终获得一个实例；

var LazyLoarder = (function () {
	var instance;
	//console.info(1, instance);
	
	function getInstance () {
		return {
			BASE_URL: "http://www.baidu.com",
			columnId: 123
		}
	}

	return function () {
		//console.info(2, instance);
		return instance || (instance = getInstance());
	};
})();

/*var a = LazyLoarder();
var b = LazyLoarder();
console.info(a);
console.info(a == b);*/

// 4. 通用
/*var getSingleton = (function () {
	var instance;
	//console.info(1, instance);

	return function (fn) {
		//console.info(2, instance);
		return instance || (instance = fn.apply(this, arguments));
	};
})();

var CONFIG = getSingleton(function () {
	return {
		BASE_URL: "http://www.baidu.com",
		columnId: 123
	}
});

var c = getSingleton();*/

// 改进版
var getSingleton = (function (fn) {
	var instance;
	return function () {
		if(!fn || !fn instanceof Function){
			throw new Error("fn 不是方法");
		}
		return instance || (instance = fn.apply(this, arguments));
	};
});

/*var CONFIG = getSingleton(function () {
	return {
		BASE_URL: "http://www.baidu.com",
		columnId: 123
	}
})();

console.info(CONFIG);
console.info(CONFIG);*/

/**
 * 1. 懒加载
 * @param name
 * @param age
 * @param job
 * @constructor
 */

/*var Singleton = (function () {
	var instance;

	function Person (name, age, job) {
		this.name = name;
		this.age = age;
		this.job = job;
	}

	Person.prototype.sayName = function () {
		return this.name;
	};

	return function (name, age, job) {
		return instance || new Person(name, age, job);
	};
})();*/

/*var p = new Singleton("Link");
console.info(p.name);*/






var PersonSingle = getSingleton(function (name, age, job) {
	function _Person (name, age, job) {
		this.name = name;
		this.age = age;
		this.job = job;
	}

	_Person.prototype.sayName = function () {
		return this.name;
	};

	return new _Person(name, age, job);
});


var a = PersonSingle("zac", 100, "prince");
var b = PersonSingle("zac123", 123, "prince123");

console.info(a, b, a === b);
