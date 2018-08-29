/**
 * Created by codingnuts on 2018/5/31.
 */
var BaiduMapPrototype = {
	init: function () {
		console.info("初始化 baidu 地图", this.name)
	},
	flyTo: function () {
		console.info("baidu fly to ");
	}
};


var MapFactory = (function () {
	var State = function () {

	};
	State.prototype = {
		init: function () {
			throw new Error("没有初始化 init 方法");
		},
		flyTo: function () {
			throw new Error("没有初始化 flyTo 方法");
		}
	};

	return function (_prototype) {
		function f (name) {
			this.name = name;
		}
		f.prototype = new State();

		for(var i in _prototype) {
			f.prototype[i] = _prototype[i];
		}
		return f;

	}
})();

var BaiduMap = MapFactory(BaiduMapPrototype);

var b = new BaiduMap(123);
b.init();


