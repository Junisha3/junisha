var Tshirt = /** @class */ (function () {
    function Tshirt(i, n, s) {
        this.color = i;
        this.material = n;
        this.design = s;
    }
    Tshirt.prototype.display = function () {
        console.log(this.color);
        console.log(this.material);
        console.log(this.design);
    };
    return Tshirt;
}());
var small = new Tshirt("Blue", "Polyster", "Round");
small.display();
var large = new Tshirt("Pink", "Poly", "V Shaped");
large.display();
var xtra = new Tshirt("Brown", "Nylon", "Sleeves");
xtra.display();
