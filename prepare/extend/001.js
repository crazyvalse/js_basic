/**
 * Created by codingnuts on 2018/3/14.
 */

/*
function Person (name, age , job) {
	this.name = name;
	this.age = age;
	this.job= job;

	this.sayName = function () {
		console.info(this.name);
	};

}


var p1 = new Person("Zelda", 100, "Princess");
var p2 = new Person("Link", 120, "Guardian");
*/

//p1.sayName();
//p2.sayName();

//1. 判断实例
//console.info(p1 instanceof Person);
//console.info(p2 instanceof Person);

//2.
//console.info(p1.constructor);
//console.info(p1.constructor == Person);


//3. 缺点
//console.info(p1.sayName == p2.sayName);

//4. 正常使用
/*function Person (name, age , job) {
 this.name = name;
 this.age = age;
 this.job= job;

 this.sayName = function () {
 console.info(this.name);
 };

 }

 Person("Black Panther", 30, "King");*/

//5. 原型
function Person () {

}

/*
Person.prototype = {
	constructor: Person,
	name: "Zelda",
	age: 123,
	job: "Princess",
	sayName: function () {
		console.info(this.name);
	}
};
*/


/*Person.prototype.name = "Zelda";
Person.prototype.age = 123;
Person.prototype.job = "Princess";
Person.prototype.friends = [1,2,3,4];
Person.prototype.sayName = function () {
	console.info(this.name);
};*/

//console.info(Person.prototype);
//console.info(Person.prototype.constructor == Person);

//var descriptor = Object.getOwnPropertyDescriptor(Person.prototype, "constructor");
//console.info(descriptor);

/*var p1 = new Person();
var p2 = new Person();*/

/*p1.sayName();

console.info(p1 instanceof Person);
console.info(p1.constructor);*/

//console.info(p1.sayName == p2.sayName);


//console.info(p1.name);

//console.info(Person.prototype.isPrototypeOf(p1));

//console.info(Object.getPrototypeOf(p1));
//console.info(Object.getPrototypeOf(p1) == Person.prototype);
/*p1.__proto__ = {
	name: "Link"
};*/

//console.info(p1.name);


//console.info(p1.__proto__);

//console.info(p2.name);

//p1.sayName();
//console.info(p1.constructor == Object);

//console.info(p1 instanceof Person);
//console.info(p1 instanceof Object);

//console.info(p1.name == p2.name);
//console.info(p1.sayName == p2.sayName);
/*p1.name = "Canon";
console.info(p1.name);
console.info(p2.name);

delete p1.name;
console.info(p1.name);
console.info(p2.name);

delete p1.name;
console.info(p1.name);
console.info(p2.name);

delete Person.prototype.name;
console.info(p1.name);
console.info(p2.name);*/


function Person (name, age , job) {
	this.name = name;
	this.age = age;
	this.job = job;
}

Person.prototype = {
	constructor: Person,
	sayJob: function () {
		console.info(this.job);
	}
};

Person.prototype.sayName = function () {
	console.info(this.name);
};

var p1 = new Person(1,2,3);
var p2 = new Person(1,2,3);

/*Person.prototype.food = ["apple", "banana"];

p1.food.push("cherry");

console.info(p2.food);
console.info(p2.name);

var p3 = new Object();

Person.call(p3, 4,5,6);

console.info(p3.name);*/


//console.info(p1 instanceof Person);
//console.info(p1 instanceof Object);

//console.info(p1.constructor == Person);
//console.info(p1.constructor == Object);



