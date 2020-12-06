function printPoint(p) {
    console.log(p.x + ", " + p.y);
}
var point = { x: 12, y: 26 };
printPoint(point);
var point3 = { x: 12, y: 26, z: 89 };
printPoint(point3);
var color = { hex: "#187ABF" };
// printPoint(color)
var VirtualPoint = /** @class */ (function () {
    function VirtualPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return VirtualPoint;
}());
var newVPoint = new VirtualPoint(13, 56);
printPoint(newVPoint);
