/**
 * Created by codingnuts on 2018/4/18.
 */
//





var GoogleMapCustom = function () {
	this.map = null;
	this.currentCoords = null;
	this.init();
};

GoogleMapCustom.prototype = {
	init: function () {
		this.map = Google.map("div");
	},
	addPointer: function (coord) {
		this.map.addCoord(coord);
		console.info("添加节点" + coord.x);
	},
	removePointer: function () {
		console.info("去除节点");
	},
	removeAll: function () {
		currentCoords.forEach(function (item) {
			map.remove(item.x, item.y);
		});
	},
	moveTo: function (coords) {
		console.info("移动到" + coords);
	}
};


var BaiduMap = function () {
	this.init();
};

BaiduMap.prototype = {
	init: function () {

	},
	addPointer: function (coord) {
		this.map.addPointer(coord.x, coord.y);
		console.info("添加节点" + coord.x);
	},
	removePointer: function () {
		console.info("去除节点");
	},
	removeAll: function () {
		console.info("删除所有")
	},
	moveTo: function (coords) {
		console.info("移动到" + coords);
	}
};
