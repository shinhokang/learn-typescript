"use strict";
function assertNever(obj) {
    throw new Error('Unexpected object');
}
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * Math.pow(shape.radius, 2);
        case 'rectangle':
            return shape.w * shape.h;
        case 'square':
            return Math.pow(shape.size, 2);
    }
    assertNever(shape);
}
var shape2 = { kind: "circle", radius: 10 };
var area2 = getArea(shape2);
//# sourceMappingURL=shape-functional-style.js.map