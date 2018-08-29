/**
 * Created by codingnuts on 2018/4/12.
 */

// 单例:
var utils = {
	isIe :function () {
		
	},
	browser: function () {
		
	},
	extend: function () {

	},
};


// 1. 命名空间
var xiaohuo = {
	hello: function () {
		
	}
};

var fudie = {
	hello: function () {
		
	}
};

/*(function () {
	var hello = function () {
		console.info("1")
	}

	hello();
})();


//
(function () {
	var hello = function () {
		console.info(2)
	};

	hello();
})();*/

// 2. 静态变量


/*Object.defineProperty(BASE_CONFIG, "BASE_URL", {
	writable: false,
	configurable: false
});

BASE_CONFIG.BASE_URL = 123;
console.info(BASE_CONFIG.BASE_URL);*/
// 不希望别人修改 - 方法进行调用

/*
var CONFIG = (function  () {
	var BASE_CONFIG = {
		BASE_URL : "http://172.19.32.153",
		columnId : {
			a: 1
		}
	};

	return function (name) {
			return BASE_CONFIG[name];
	};
})();


console.info(CONFIG("columnId") === CONFIG("columnId"));
*/
//3. 懒加载

//1. 懒加载: 只有在用的时候，才会被初始化；
//2. 用的时候 始终一个实例；
/*
var Singleton = (function  () {
	var instance;
	//a.
	function getInstance () {
		return {
			BASE_URL : "http://172.19.32.153",
			columnId : {
				a: 1
			}
		};
	}

	return function () {
		return instance || (instance = getInstance());    //b.
	};
})();

var instance = Singleton();
console.info(3, instance);
*/

//4. 通用方法
var getSingleton = function  () {
	var instance;
	return function (fn) {
		return instance || (instance = fn.apply(this, arguments));    //b.
	};
}();

function getConfig () {
	return {
		BASE_URL : "http://172.19.32.153",
		columnId : {
			a: 1
		}
	};
}

var CONFIG = getSingleton(getConfig)();

console.info(CONFIG);




var myDialog = getSingleton(function () {
	function Dialog (id) {
		this.id = id;
	}
	Dialog.prototype = {
		init: function () {
			console.info("dialog 初始化");
		},
		open: function () {
			console.info("打开");
		},
		close: function () {
			console.info("关闭");
		}
	};
	return new Dialog(123);

})();
myDialog.open();



