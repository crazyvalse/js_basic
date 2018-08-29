/**
 * Created by codingnuts on 2018/5/31.
 */
var LevelA = function () {

};

LevelA.prototype.calculate = function (salary) {
	return salary * 2
};

var LevelB = function () {

};

LevelB.prototype.calculate = function (salary) {
	return salary * 3
};

var LevelC = function () {

};

LevelC.prototype.calculate = function (salary) {
	return salary * 4
};

var Calculate = function (level, salary) {
	return new level().calculate(salary);
};

console.info(Calculate(LevelA, 2000));