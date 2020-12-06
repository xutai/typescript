interface Point {
    x: number
    y: number
}

function printPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`)
}

const point = { x: 12, y: 26 }
printPoint(point)

const point3 = { x: 12, y: 26, z: 89 }
printPoint(point3)

const color = { hex: "#187ABF" }
// printPoint(color)




class VirtualPoint {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}

const newVPoint = new VirtualPoint(13, 56)
printPoint(newVPoint)





