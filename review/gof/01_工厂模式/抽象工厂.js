/**
 * Created by codingnuts on 2018/5/31.
 */
var inherit = function (sub, sup) {
	var create = Object.create || function (prototype) {
			function f () {

			}

			f.prototype = prototype;
			return new f();
		};

	sub.prototype = create(sup.prototype);
	sub.prototype.constructor = sub;
};

var MapFactory = function () {

};

MapFactory.prototype = {
	init: function () {
		throw new Error("没有初始化 init 方法");
	},
	flyTo: function () {
		throw new Error("没有初始化 flyTo 方法");
	}
};

var GoogleMap = function () {
};
inherit(GoogleMap, MapFactory);
GoogleMap.prototype.init = function () {
	console.info("初始化 google 地图！");
};
GoogleMap.prototype.flyTo = function () {
	console.info("google flyTo 方法！")
};


var BaiduMap = function () {

};
inherit(BaiduMap, MapFactory);
BaiduMap.prototype = {
	init: function () {
		console.info("初始化 baidu 地图")
	},
	flyTo: function () {
		console.info("baidu fly to ");
	}
};

var g = new GoogleMap();
g.flyTo();