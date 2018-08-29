/**
 * Created by codingnuts on 2018/3/14.
 */
//父类
function TheAvengers (head) {
		this.head = head
		this.friends = ["Captain American", "Hulk"];
	console.info(11111);
}

TheAvengers.prototype.season = 1;
TheAvengers.prototype.getHead = function () {
	return this.head;
};

//子类 - 拥有父类所有的东西 this prototype
function IronMan (name, head) {
	this.name = name;
	this.gift = "Armor";
	TheAvengers.call(this, head);   //2次 3次
}

/*function f () {

}

f.prototype = TheAvengers.prototype;


IronMan.prototype = new f(); //new TheAvengers();    //1次*/
IronMan.prototype = new TheAvengers();

IronMan.prototype.getGift = function () {
	console.info(this.gift);
};

IronMan.prototype.getName = function () {
	console.info(this.name);
};

IronMan.prototype.getHead = function () {
	console.info("我是老大 我怕谁!");
};



var tonyStack = new IronMan("Tony Stack", 1);
var t2 = new IronMan("xiaohuo", 2);

//IronMan.prototype.season = 2;

/*console.info(tonyStack instanceof IronMan);
console.info(tonyStack instanceof TheAvengers);
console.info(tonyStack instanceof Object);*/

//console.info(tonyStack.constructor);
//console.info(Object.getPrototypeOf(tonyStack) == IronMan.prototype);
//console.info(tonyStack.__proto__.__proto__ == TheAvengers.prototype);

//console.info(tonyStack.head == tonyStack.__proto__.head);
//console.info(tonyStack.getHead == tonyStack.__proto__.getHead);

//console.info(t2.head == tonyStack.head);
//console.info(t2.getHead == tonyStack.getHead);
//console.info(tonyStack.getGift === t2.getGift);

//tonyStack.getName();
//t2.getName();

//tonyStack.getHead();
//t2.getHead();


/*console.info(tonyStack.season);
console.info(t2.season);

delete tonyStack.season
console.info(tonyStack.season);
console.info(t2.season);

delete IronMan.prototype.season;
console.info(tonyStack.season);
console.info(t2.season);

delete IronMan.prototype.season;
console.info(tonyStack.season);
console.info(t2.season);

delete TheAvengers.prototype.season;
console.info(tonyStack.season);
console.info(t2.season);*/

/*
tonyStack.head = "myself";
console.info(tonyStack.head);
console.info(t2.head);
*/

/*tonyStack.friends = [1,2,3,4];
console.info(tonyStack.friends);
console.info(t2.friends);*/

/*tonyStack.friends.push("Black Widow");
console.info(tonyStack.friends.length);
console.info(t2.friends.length);

delete tonyStack.friends
console.info(tonyStack.friends.length);
console.info(t2.friends.length);


tonyStack.friends.push("Black Widow");
console.info(tonyStack.friends.length);
console.info(t2.friends.length);*/

//console.info(tonyStack.head);
//console.info(t2.head);



