"use strict";
function printPoint(p) {
    console.log(`${p.x}, ${p.y}`);
}
const point = { x: 12, y: 26 };
printPoint(point);
const point3 = { x: 12, y: 26, z: 89 };
printPoint(point3);
const color = { hex: "#187ABF" };
class VirtualPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const newVPoint = new VirtualPoint(13, 56);
printPoint(newVPoint);
