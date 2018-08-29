/**
 * Created by codingnuts on 2018/3/12.
 */

//1. 继承
/*function TheAvengers(){
	this.head = "Fury";
}

TheAvengers.prototype.getHead = function () {
	return this.head;
};

function IronMan () {
	this.gift = "Armor";
}

IronMan.prototype = new TheAvengers();

IronMan.prototype.getGift = function () {
	return this.gift;
};

var tonyStack = new IronMan();*/

//console.info(tonyStack.getHead(), tonyStack.getGift());

//2. 判断实例关系
/*
console.info(tonyStack instanceof IronMan);
console.info(tonyStack instanceof TheAvengers);
console.info(tonyStack instanceof Object);
*/

//3. 确定prototype
//a. 获得prototype
//console.info(Object.getPrototypeOf(tonyStack));

//b. 判断是不是类的原型
/*console.info(IronMan.prototype.isPrototypeOf(tonyStack));
console.info(TheAvengers.prototype.isPrototypeOf(tonyStack));
console.info(Object.prototype.isPrototypeOf(tonyStack));*/

//4. 定义方法

/*function TheAvengers(){
	this.head = "Fury";
}

TheAvengers.prototype.getHead = function () {
	return this.head;
};

function IronMan () {
	this.gift = "Armor";
}

IronMan.prototype = new TheAvengers();

//定义新的方法
IronMan.prototype.getGift = function () {
	return this.gift;
};

//重写父类的方法
IronMan.prototype.getHead = function () {
	return "Tony Stack";
};

var tonyStack = new IronMan();

console.info(tonyStack.getHead());*/

//5. 把 prototype 换位置 - 问题一

//6. 问题二 - 共享父类的数据
/*function TheAvengers(){
	this.head = "Fury";
	this.friends = ["Captain American", "Hulk"];
}

TheAvengers.prototype.getHead = function () {
	return this.head;
};

function IronMan () {
	this.gift = "Armor";
}

IronMan.prototype = new TheAvengers();

IronMan.prototype.getGift = function () {
	return this.gift;
};

var tonyStack = new IronMan();
var xiaoTuo = new IronMan();

tonyStack.friends.push("Black Widow");

console.info(tonyStack.friends);
console.info(xiaoTuo.friends);*/

//7. 借用构造函数
/*function TheAvengers(){
	this.head = "Fury";
	this.friends = ["Captain American", "Hulk"];
}

TheAvengers.prototype.getHead = function () {
	return this.head;
};

function IronMan () {
	this.gift = "Armor";
	TheAvengers.call(this);
}

IronMan.prototype = new TheAvengers();

IronMan.prototype.getGift = function () {
	return this.gift;
};

var tonyStack = new IronMan();
var xiaoTuo = new IronMan();

tonyStack.friends.push("Black Widow");

console.info(tonyStack.friends);
console.info(xiaoTuo.friends);
console.info(tonyStack);*/

//8. 传值
/*function TheAvengers(head){
	this.head = head;
	this.friends = ["Captain American", "Hulk"];
}

TheAvengers.prototype.getHead = function () {
	return this.head;
};

function IronMan (head) {
	this.gift = "Armor";
	TheAvengers.call(this, head || "Agent Fury");
}

IronMan.prototype = new TheAvengers();

IronMan.prototype.getGift = function () {
	return this.gift;
};

var tonyStack = new IronMan("Super Man");
var xiaoTuo = new IronMan();

tonyStack.friends.push("Black Widow");

console.info(tonyStack);
console.info(xiaoTuo);*/

//9. 缺点 - 构造函数被用了两次 - 怎么办
/*
function extend (sup, sub) {
	function F () {

	}
	F.prototype = sup.prototype;

	sub.prototype = new F();
	sub.prototype.constructor = sub;
}

function TheAvengers(){
	this.head = "Fury";
	this.friends = ["Captain American", "Hulk"];
	console.info(111);
}

TheAvengers.prototype.getHead = function () {
	return this.head;
};

function IronMan () {
	this.gift = "Armor";
	TheAvengers.call(this);
}

extend(TheAvengers, IronMan);

IronMan.prototype.getGift = function () {
	return this.gift;
};

var tonyStack = new IronMan("Super Man");
var xiaoTuo = new IronMan();

tonyStack.friends.push("Black Widow");

console.info(tonyStack);
console.info(xiaoTuo);
*/





