var Student1 = /** @class */ (function () {
    function Student1(i, n) {
        this.stdId = i;
        this.stdName = n;
    }
    Student1.prototype.display = function () {
        console.log(this.stdId);
        console.log(this.stdName);
        console.log(this.stdClass);
    };
    return Student1;
}());
var e1 = new Student1(323, "Naram");
e1.display();
