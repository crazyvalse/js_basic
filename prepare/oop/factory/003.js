/**
 * Created by codingnuts on 2018/4/18.
 */

var Factory = function () {

};

Factory.prototype = {
	fa: function () {
		throw new Error("抽象方法，需要实现");
	},
	sa: function () {
		throw new Error("抽象方法，需要实现");
	},
	ma: function () {
		throw new Error("抽象方法，需要实现");
	}
};

Function.prototype.inherits = function (sup) {
	var _sub = this;
	Object.create = Object.create || function (obj) {
			function f () {
			}

			f.prototype = obj;
			return new f();
		};
	_sub.prototype = Object.create(sup.prototype);
	_sub.constructor = _sub;
};

var Damo = function () {

};
Damo.inherits(Factory);

Damo.prototype.sa = function () {
	console.info(123);
};

Damo.prototype.fa = function () {
	console.info(321)
};


var d = new Damo();
d.sa();
d.fa();





