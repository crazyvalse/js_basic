/**
 * Created by codingnuts on 2018/6/1.
 */
var Event = function () {
	this.allEvents = {};
};

Event.prototype = {
	trigger: function () {
		var key = Array.prototype.shift.call(arguments),
			fns = this.allEvents[key];
		if (fns instanceof Array && fns.length) {
			for (var i = 0, fn = null; fn = fns[i++];) {
				fn.apply(this, arguments);
			}
		}
	},
	listen: function (key, fn) {
		this.allEvents[key] = this.allEvents[key] || [];
		this.allEvents[key].push(fn);
	},
	/**
	 * 1. 根据key获取到列表，
	 *  a. fn 有意义，并且是function类型的，去掉这一项
	 *  b. fn 没有意义，去掉全部的
	 *
	 * @param key
	 * @param fn
	 */
	remove: function (key, fn) {
		var fns = this.allEvents[key];
		if (!fns && fns.length) {
			return false;
		}

		if (fn && fn instanceof Function) {
			for (var i = 0, _fn = null; _fn = fns[i++];) {
				if (_fn === fn) {
					fns.splice(i - 1, 1);
				}
			}
		} else {
			this.allEvents[key].length = 0;
		}
	}
};

var event = new Event();

var fn = function (a, b, c, d) {
	console.info(a + b + c + d);
};

event.listen("1", fn);

event.trigger("1", 1, 2, 3, 4);

event.remove("1", fn);

event.trigger("1", 1, 2, 3, 4);