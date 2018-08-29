/**
 * Created by codingnuts on 2018/6/1.
 */
var Event = function () {
	this.allEvents = [];
};

Event.prototype = {
	trigger: function () {
		var key = Array.prototype.shift.call(arguments),
			fns = this.allEvents[key];
		if(fns instanceof Array && fns.length) {
			for(var i = 0, fn = null; fn = fns[i++];){
				fn.apply(this, arguments);
			}
		}
	},
	listen: function (key, fn) {
		this.allEvents[key] = this.allEvents[key] || [];
		this.allEvents[key].push(fn);
	}
};

var event = new Event();

event.listen("1", function (a, b, c, d) {
	console.info(a + b + c + d);
});

event.trigger("1", 1, 2, 3, 4);
