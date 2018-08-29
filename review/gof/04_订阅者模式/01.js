/**
 * Created by codingnuts on 2018/5/31.
 */
var Event = {
	_events: {},
	listen: function (key, fn) {
		this._events[key] = this._events[key] || [];
		this._events[key].push(fn);
	},
	trigger: function () {
		let key = Array.prototype.shift.call(arguments),
			fns = this._events[key];

		if (!fns || fns.length === 0) {
			return false;
		}

		for (var i = 0, fn; fn = fns[i++];) {
			fn.apply(this, arguments);
		}
	}
};

Event.listen("1", function (p) {
	console.info(p)
});

Event.listen("1", function (p) {
	console.info(1, p + "-2")
});

Event.trigger("1", "hello");



