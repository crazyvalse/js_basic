/**
 * Created by codingnuts on 2018/5/31.
 */
var BaiduMapPrototype = {
	init: function () {
		console.info("初始化 baidu 地图")
	},
	flyTo: function () {
		console.info("baidu fly to ");
	}
};


var MapFactory = (function () {
	var interfaces = ["init", "flyTo"];
	return function (_prototype) {
		for (var i = 0; i < interfaces.length; i++) {
			if (!_prototype[interfaces[i]] || typeof _prototype[interfaces[i]] != "function") {
				throw new Error(interfaces[i] + "未定义！");
			}
		}
		function F (option) {
			this.option = option;
		}
		F.prototype = _prototype;
		return F;
	};
})();

var BaiduMap = MapFactory(BaiduMapPrototype);

var b = new BaiduMap();
b.init();


