"use strict";
// Type Narrowing
Object.defineProperty(exports, "__esModule", { value: true });
function getChai(kind) {
    if (typeof kind === 'string') {
        return `making ${kind} of chai ....`;
    }
    return `chai order :${kind}`;
}
function severChai(msg) {
    if (msg) {
        return `Serving${msg}`;
    }
    return `serving default masala chai`;
}
function orderChai(size) {
    if (size === 'small') {
        return `ordering a small chai`;
    }
    if (size === 'medium') {
        return `ordering a medium chai`;
    }
    return `ordering a large chai`;
}
// function orderChai(size: 'small' | 'medium' | 'large') {
//     return `ordering a ${size} chai`
// }
console.log(orderChai('medium'));
class kulhadChai {
    serve() {
        return 'serving kulhad chai';
    }
}
class Cutting {
    serve() {
        return 'serving cutting chai';
    }
}
function serve(chai) {
    if (chai instanceof kulhadChai) {
        return chai.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === 'object'
        && obj !== null
        && typeof obj.type === 'string'
        && typeof obj.sugar === 'number');
}
;
function serverOrder(item) {
}
//# sourceMappingURL=typeNarrowing.js.map