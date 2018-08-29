/**
 * Created by codingnuts on 2018/3/12.
 */

function extend (subType, superType) {
	var prototype;
	if (Object.create) {
		prototype = Object.create(superType.prototype);
	} else {
		function F () {
		}

		F.prototype = superType.prototype;
		prototype = new F();
	}

	subType.prototype = prototype;
	prototype.constructor = subType;
}

function SuperType (name) {
	this.name = name;
	this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
	console.info(this.name);
};

function SubType (name, age) {
	SuperType.call(this, name);
	this.age = age;
}

extend(SubType, SuperType);

SubType.prototype.sayAge = function () {
	console.info(this.age);
};




















