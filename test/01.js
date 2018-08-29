/**
 * Created by codingnuts on 2018/3/8.
 */

/*
var Person = new Object();
Person.name = "Zelda";
Person.age = 100;
Person.job = "princess";

Person.sayName = function () {
	console.info(this.job);
};

Person.sayName();

*/

/*var person = {
	name: "Zelda",
	age: 12,
	sayName: function () {
		console.info(this.name);
	}
};


person.sayName();*/

/*var lee = {
	name: "Zelda",
	age: 12,
	sayName: function () {
		console.info(this.name);
	}
};*/

/*function CarFactory () {
	var o = new Object();
	o.brand = "Benz";
	o.size = "mid";
	o.sayBrand = function () {
		console.info(o.brand);
	};
	return o ;
}

var c1 = CarFactory();
c1.sayBrand();*/

//

/*
function Person (name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function () {
		console.info(this.name);
	};
}

var p1 = new Person("Zelda", 100, "Princess");
var p2 = new Person("Link", 120, "Guardian");
*/

//p1.sayName();
//p2.sayName();

//console.info(p1 instanceof Person);
/*console.info(p1.constructor);
console.info(Person);*/

//console.info(p1.constructor === Person);

//Person("Zac", 111, "Joker");

//sayName();

/*var o = new Object();
Person.call(o, "isaac", 111, "en");

o.sayName();*/


//console.info(p1.sayName == p2.sayName);


/*function Person () {

}

Person.prototype.name = "Zelda";
Person.prototype.age = 111;
Person.prototype.job = "Princess";
Person.prototype.sayName = function () {
	console.info(this.name);
};

var p1 = new Person();
var p2 = new Person();



//p1.sayName();

//console.info(p1.constructor);
//console.info(Person.prototype.constructor == Person);
//console.info(Person.prototype);

//var descriptor = Object.getOwnPropertyDescriptor(Person.prototype, "constructor");
//console.info(descriptor);

//console.info(p1.name);
//console.info(p2.name);
//console.info(p1.sayName == p2.sayName);

p1.name = "Link";
/!*p1.sayName();
p2.sayName();

//console.info(Person.prototype.isPrototypeOf(p1));
//console.info(Object.prototype.isPrototypeOf(p1));

//console.info(Object.getPrototypeOf(p1));




delete p1.name;
p1.sayName();
p2.sayName();

delete p1.name;
p1.sayName();
p2.sayName();*!/

//delete Object.getPrototypeOf(p1).name;
//Object.getPrototypeOf(p1).name = "zac";
//p1.sayName();
//p2.sayName();

//console.info(p1);
//console.info(p1.hasOwnProperty("age"));



/!*for(var item in p1) {
	console.info(item);
}*!/

/!*console.info("name" in p1);

console.info("ddd" in p1);*!/

Object.keys(p1).forEach(function (item) {
	console.info(item);
});*/


//构造 + 原型
function Person (name, age , job) {
	this.name = name;
	this.age = age;
	this.job = job;
}

Person.prototype = {
	sayAge: function () {
		console.info(this.age);
	}
};



/*Person.prototype = {
	constructor: Person,
	sayName: function () {
		console.info(this.name);
	},
	sayJob: function () {
		console.info(this.job);
	}
};*/

var p1 = new Person("Zelda", 123, "Princess");
var p2 = new Person("Link", 111, "Guardian");

Person.prototype.sayName = function () {
	console.info(this.name);
};
Person.prototype.sayJob = function () {
	console.info(this.job);
};


p1.sayName();
p2.sayName();
p1.sayJob();
p2.sayJob();

/*console.info(p1 instanceof Person);
console.info(Object.getPrototypeOf(p1) == Person.prototype);
console.info(p1.constructor == Person);*/






















