var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name, age, email) {
        this._name = name;
        this._age = age;
        this._email = email;
    }
    Human.prototype.getHumanData = function () {
        console.log("from Human");
    };
    return Human;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, email, subjects) {
        if (subjects === void 0) { subjects = []; }
        var _this = _super.call(this, name, age, email) || this;
        _this._subjects = subjects;
        Student.count++;
        return _this;
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () { return this._name; },
        set: function (val) { this._name = val; },
        enumerable: false,
        configurable: true
    });
    Student.prototype.getHumanData = function () {
        _super.prototype.getHumanData.call(this);
        console.log("from student");
    };
    Student.getCounter = function () {
        return Student.count;
    };
    Student.count = 0;
    return Student;
}(Human));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, email, salary) {
        var _this = _super.call(this, name, age, email) || this;
        _this._salary = salary;
        return _this;
    }
    return Teacher;
}(Human));
var s1 = new Student("marwa", 38, "marwa@techsexperts.com");
s1.getHumanData();
console.log(Student.count);
Student.getCounter();
