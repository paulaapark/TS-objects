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
var Student = /** @class */ (function () {
    function Student(stud_name, stud_age, stud_gender, stud_nat) {
        this.name = stud_name;
        this.age = stud_age;
        this.gender = stud_gender;
        this.nationality = stud_nat;
    }
    Student.prototype.getNationality = function () {
        return "Nationality: ".concat(this.nationality);
    };
    return Student;
}());
var student1 = new Student("Paula", 27, 'female', "Canadian");
var UnderGraduate = /** @class */ (function (_super) {
    __extends(UnderGraduate, _super);
    function UnderGraduate(stud_name, stud_age, stud_gender, stud_nat, stud_batch, stud_GPA) {
        var _this = _super.call(this, stud_name, stud_age, stud_gender, stud_nat) || this;
        _this.batch = stud_batch;
        _this.GPA = stud_GPA;
        return _this;
    }
    UnderGraduate.prototype.getNationality = function () {
        return "Nationality: ".concat(this.nationality);
    };
    return UnderGraduate;
}(Student));
var undergraduate1 = new UnderGraduate("Paula", 27, 'female', "Canadian", 1, 3.85);
console.log(undergraduate1.getNationality());
