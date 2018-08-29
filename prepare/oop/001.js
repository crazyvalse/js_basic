/**
 * Created by codingnuts on 2018/3/8.
 */

/*
var Person = new Object();

Person.name = "Zelda";  //Isaac
Person.age = 12;
Person.job = "princess";
Person.sayName = function () {
	console.info(this.name);
};

Person.sayName();
*/

/*var Person = {
	name: "Link",
	age: 122,
	job: "Guardian",
	sayName: function () {
		console.info(this.name);
	}
};


Person.sayName();*/

/*
function PersonFactory () {
	var o = new Object();
	o.name = "zac";
	o.age = 22;
	o.job = "Joker";
	o.sayName = function () {
		console.info(this.name);
	};
	return o;
}

var p1 = PersonFactory();
var p2 = PersonFactory();

p1.sayName();
p2.sayName();

*/

// 构造函数的方法
/*
function Person (name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function () {
		console.info(this.name);
	}
}

var p1 = new Person("Zelda", 111, "Princess");
var p2 = new Person("Link", 122, "Guardian");
var p3 = new Person ("Bayonetta", 500, "witch");

//p1.sayName();
//p2.sayName();

console.info(p1.constructor);
console.info(p2.constructor == p3.constructor);

console.info(p1 instanceof Person);


Person("zac", 111, "en");


var o = new Object();
Person.call(o, "Isaac", 123, "666");
o.sayName();
*/

/*
function Person () {

}

Person.prototype.name = "Link";
Person.prototype.age = 111;
Person.prototype.job = "Guardian";
Person.prototype.friends = [1,2,3,4];
Person.prototype.sayName = function () {
	console.info(this.name);
};

var p1 = new Person();
var p2 = new Person();

p1.sayName();
p2.sayName();

/!*var descriptor = Object.getOwnPropertyDescriptor(Person.prototype, "constructor");
console.info(description);*!/

console.info(Person.prototype.constructor == Person);
console.info(Person.prototype.isPrototypeOf(p1));

console.info(Object.getPrototypeOf(p1) == Person.prototype);

p1.name = "Zelda";

p1.sayName();
p2.sayName();

p1.friends.push(555);
console.info(p1.friends);
console.info(p2.friends);*/



