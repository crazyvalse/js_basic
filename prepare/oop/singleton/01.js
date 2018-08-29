/**
 * Created by codingnuts on 2018/4/11.
 */
// 1. 命名空间
var A = {
	util: {
		util_method1: function () {
			// ...
		}
	},
	tool: {
		tool_method1: function () {

		}
		// ...
	}
};


// 2. 静态变量
var CONFIG = (function () {
	var conf = {
		MAX_NUM: 100,
		MIN_NUM: 1,
		COUNT: 1000
	};

	return {
		get: function (name) {
			return conf[name] ? conf[name] : null;
		}
	};
})();


// 3. 懒性单例
// a. 这个实例不能暴露在外边；
// b. 这个实例需要在用的时候，初始化；
// c. 再次调用，调用的始终是一个实例；
var LazySingle = (function () {
	var _instance = null;

	function Single () {
		return {
			publicMethod: function () {

			},
			publicProperty: '1.0'
		};
	}

	// 同理
	return {
		getInstance: function () {
			if (!_instance) {
				_instance = Single();
			}
			return _instance;
		}
	};

})();


//4. 通用单例
var SingletonFactory = (function () {
	var instance;
	return function (fn) {
		return instance || (instance = fn.apply(this, arguments));
	};
})();

var B = SingletonFactory(function () {
	return {
		a: 1
	}
});

var C = SingletonFactory(function () {
	return {
		a: 1
	}
});


console.info(A);
console.info(B == A);