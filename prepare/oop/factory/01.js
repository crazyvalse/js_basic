/**
 * Created by codingnuts on 2018/4/12.
 */

// addPoint removePoint popUp popDown

//BaiduMap GaodeMap TiandiMap Google Map
//flyTo highlight addPointer addNote

function BaiDuWork (id) {
	this.id = id
}

BaiDuWork.prototype = {
	flyTo :function (x, y) {
		console.info("百度地图飞到了", x, y);
	},
	highlight: function (pointer) {
		console.info("高亮", pointer);
	},
	addPointer: function (pointer) {
		console.info("添加点", pointer);
	},
	addNote: function (note) {
		console.info("注释: ", note)
	}
};

function GaodeWork (id) {
	this.id = id
}

GaodeWork.prototype = {
	flyTo :function (x, y) {
		console.info("高德地图飞到了", x, y);
	},
	highlight: function (pointer) {
		console.info("高德地图高亮", pointer);
	},
	addPointer: function (pointer) {
		console.info("高德地图添加点", pointer);
	},
	addNote: function (note) {
		console.info("高德地图注释: ", note)
	}
};

var Factory = function (name) {
	if(name == "baidu"){
		return new BaiDuWork();
	}else if(name == "gaode"){
		return new GaodeWork();
	}
};

var instance = Factory("baidu");

instance.addNote();