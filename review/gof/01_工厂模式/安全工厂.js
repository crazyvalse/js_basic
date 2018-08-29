/**
 * Created by codingnuts on 2018/5/31.
 */

(function () {
	var Benz = function (name) {
		this.name = name;
	};

	Benz.prototype = {
		constructor: Benz,
		run: function () {
			console.info(this.name, " run");
		},
		stop: function () {
			console.info(this.name, " stop");
		}
	};

	var Mazda = function () {
		this.name = name;
	};

	Mazda.prototype = {
		constructor: Mazda,
		run: function () {
			console.info(this.name, " run");
		},
		stop: function () {
			console.info(this.name, " stop");
		}
	};

	/**
	 * 根据那么获得car的实例
	 * @param name
	 * @constructor
	 */
	var CarFactory = function (name, content) {
		if(!(this instanceof CarFactory)){
			return new CarFactory(name, content);
		}
		return new this[name](content);
	};

	CarFactory.prototype = {
		Benz: Benz,
		Mazda: Mazda
	};

	var b = CarFactory("Benz", "bbb");
	console.info(b)

	b.run();
})();
