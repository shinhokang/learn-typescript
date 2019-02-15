type Shape2 = 
    { kind: "circle", radius: number } |
    { kind: "rectangle", w: number, h: number } |
    { kind: "square", size: number };

function assertNever(obj: never) {
    throw new Error('Unexpected object');
}

function getArea(shape: Shape2) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'rectangle':
            return shape.w * shape.h;
        case 'square':
            return shape.size ** 2;
    }
    assertNever(shape);
    // throw new Error('Invalid shape');
}

const shape2: Shape2 = { kind: "circle", radius: 10 };
const area2 = getArea(shape2);