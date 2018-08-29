/**
 * Created by codingnuts on 2018/3/5.
 */

function Person (name, age, job) {
	//1.
	this.name = name;
	this.age = age;
	this.job = job;
	this.friends = [1, 2, 3, 4]; //2.
}

Person.prototype = {
	//3.
	constructor: Person,
	sayName: function () {
		console.info(this.name);
	}
};

var p1 = new Person("Zelda", 123, "Princess");
var p2 = new Person("Link", 111, "Guardian");

p1.friends.push(5);
console.info(p1.friends);
console.info(p2.friends);





