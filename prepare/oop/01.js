/**
 * Created by codingnuts on 2018/3/5.
 */
/*var person = new Object();
 person.name = "zac";
 person.age = "18";
 person.job = "singer";

 person.sayName = function () {
 console.info(this.name);
 };*/

//1. 对象字面量 - 缺点：创建多个实例比较麻烦
/*var person = {
 name: "zac",
 age: 12,
 job: "joker",
 sayName: function () {
 this.name;
 }
 };*/

//2. 工厂模式 -   缺点： 不知道怎么识别一个实例的类型
/*function PersonFactory (name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = 12;
	o.job = "joker";
	o.sayName = function () {
		console.info(this.name);
	};
	return o;
}

var p1 = PersonFactory("zac", 12, "engineer");
var p2 = PersonFactory("isaac", 13, "joker");*/

//3. 构造函数模式 -
/**
 * a. 没有显式的创建对象
 * b. 把值直接赋值给了this对象
 * c. 没有 return 方法
 *
 * 创建实例的时候，都做了哪些事情呢
 * a. 创建了一个对象
 * b. 将构造函数的作用域赋给新对象
 * c. 执行构造函数中的方法
 * d. 返回新对象
 *
 * 3.1 constructor属性 来识别对象类型
 * @param name
 * @param age
 * @param job
 * @constructor
 *
 * 3.2 缺点： 每创建一个实例 sayName 是不是就被重新创建了一次呢？
 */
/*function Person (name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function () {
		console.info(this.name);
	}
}

var p1 = new Person("Zelda", 11, "princess");
var p2 = new Person("Link", 12, "guardian");

// 3.3 判断类型 -
//console.info(p1.constructor);
//console.info(p1.constructor === Person);

/!*var p3 = new p1.constructor("canon", 500, "monster");
p3.sayName();*!/

console.info(p1 instanceof Object);
console.info(p1 instanceof Person);

// 能不能当成一个普通的函数来调用
Person("zac", 22, "me");
sayName();*/

//4. 原型模式
//每个函数都有一个prototype属性,这个属性是一个指针。用处是包含可以由特定类型的所有实例共享的属性和方法。
/**
 * 只要创建一个新的函数， 就会根据一组特定的规则为该函数创建一个prototype属性， 这个属性指向函数的原型对象。
 * 默认情况下所有原型对象都会自动获得一个 constructor 构造函数属性，这个属性指向prototype属性所在函数的指针。
 * 创建实例后，实例内部会包含一个指针（内部属性），指向构造函数的原型对象。这个指针叫[prototype]。
 * @constructor
 */
/*
function Person () {

}

Person.prototype.name = "Zac";
Person.prototype.age = 22;
Person.prototype.sayName = function () {
	console.info(this.name);
};

var p1 = new Person();
//p1.sayName();

var p2 = new Person();
//p2.sayName();
*/

/*//4.1 是不是一个内容
console.info(p1.sayName == p2.sayName);

//4.2 通过 Person.prototype.isPrototypeOf(p1) 方法可以判断是否是原型对象
console.info(Person.prototype.isPrototypeOf(p1));

//4.3 ES5 提供的 getPrototypeOf()
console.info(Object.getPrototypeOf(p1));
console.info(Object.getPrototypeOf(p1) == Person.prototype);

//4.4 可覆盖以前

p1.name = "sy";
console.info(p1.name);
console.info(p2.name);

//4.5 删除 - 能删除自定义的，却无法删除原型里面的
delete p1.name;
console.info(p1.name);
console.info(p2.name);
delete p1.name;
console.info(p1.name);*/

//4.6 判断是否是自己的


/*
p1.name = "sy";
console.info(p1.hasOwnProperty("name"));
console.info(p2.hasOwnProperty("name"));
*/


//4.7 in 判断是否是属性 - 只能判断有没有这个属性，不能判断是不是自己的
/*
console.info("name" in p1);
console.info("name" in p2);
*/

//4.8 遍历 - forEach
/*for(var _name in p1) {
	console.info(_name);
}*/

// Object.keys(p1)： 只能获得自己的
/*p1.name = "123"

Object.keys(p1).forEach(function (item) {
	console.info(item);
});


// 4.9 简单原型 - 问题 无法判断类型
Person.prototype = {
	friends: []
};

//修改后 - 问题： constructor 的 Enumerable属性变成了true
Person.prototype = {
	constructor: Person,
	friends: []
};*/

//4.10 动态原型
/*
var friend = new Person();

Person.prototype.sayHi = function () {
	console.info("Hi!");
};

friend.sayHi();
*/





