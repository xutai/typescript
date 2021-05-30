interface Point {
    x: number;
    y: number;
}
declare function printPoint(p: Point): void;
declare const point: {
    x: number;
    y: number;
};
declare const point3: {
    x: number;
    y: number;
    z: number;
};
declare const color: {
    hex: string;
};
declare class VirtualPoint {
    x: number;
    y: number;
    constructor(x: number, y: number);
}
declare const newVPoint: VirtualPoint;
