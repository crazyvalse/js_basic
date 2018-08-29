/**
 * Created by codingnuts on 2018/5/31.
 */

var calculate = function (level, salary) {
	switch (level) {
		case "A":
			salary *= 2;
			break;
		case "B":
			salary *= 3;
			break;
		case "C":
			salary *= 4;
			break;
	}
	return salary;
};


console.info(calculate("A", 1000));