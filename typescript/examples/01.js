/**
 * Created by codingnuts on 2018/9/3.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//类的声明
var Person = (function () {
    function Person(name, age) {
        if (age === void 0) { age = 10; }
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
        console.log("haha");
    } // 类的构造函数，只在实例化时被调用，而且被调用一次；
    Person.prototype.eat = function () {
        console.log("im eating");
    };
    return Person;
}());
//子类拥有父类的属性和方法,还可以自定义自己属性和方法
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, code) {
        _super.call(this, name); //子类构造函数必选调用父类构造函数
        console.log("xixi");
        this.code = code;
    }
    Employee.prototype.work = function () {
        _super.prototype.eat.call(this); //调用父类方法
        this.doWork();
    };
    Employee.prototype.doWork = function () {
        console.log("im working");
    };
    return Employee;
}(Person));
//类的实例化
var e1 = new Employee("name", "1");
e1.work();
var p1 = new Person("batman");
p1.eat();
var p2 = new Person("superman");
p2.eat();
//# sourceMappingURL=01.js.map