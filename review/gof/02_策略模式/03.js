/**
 * Created by codingnuts on 2018/5/31.
 */
var Level = {
	"A": function (salary) {
		return salary * 2;
	},
	"B": function (salary) {
		return salary * 3;
	},
	"C": function (salary) {
		return salary * 4;
	}
};

var Calculate = function (level, salary) {
	return Level[level](salary);
};

console.info(Calculate("A", 1000));