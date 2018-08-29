/**
 * Created by codingnuts on 2018/4/18.
 */
(function () {
	var Damo = function () {

	};

	Damo.prototype = {
		firstAction: function () {
			console.info("冲过去")
		},
		secondAction: function () {
			console.info("一堆拳打过去")
		},
		mustKill: function () {
			console.info("壁咚")
		}
	};

	var Gongben = function () {

	};

	Gongben.prototype = {
		firstAction: function () {
			console.info("空明斩")
		},
		secondAction: function () {
			console.info("神速")
		},
		mustKill: function () {
			console.info("天下无双")
		}
	};

	var Nvwa = function () {

	};

	Nvwa.prototype = {
		firstAction: function () {
			console.info("光波")
		},
		secondAction: function () {
			console.info("立方块")
		},
		thirdAction: function () {
			console.info("传送")
		},
		mustKill: function () {
			console.info("大光波")
		}
	};

	var Factory = function (name) {
		if(this instanceof Factory) {
			return new this[name]()
		}else{
			return new Factory(name);
		}
	};

	Factory.prototype.Damo = Damo;
	Factory.prototype.Gongben = Gongben;
	Factory.prototype.Nvwa = Nvwa;

	/*	var f = new Factory("f");

	 console.info(f.name);*/


	var instance = Factory("Damo");
	var instance1 = new Factory("Damo");

	instance.secondAction();
	instance1.firstAction();
})();