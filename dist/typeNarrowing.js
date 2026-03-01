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
// function orderChai(size: 'small' | 'medium' | 'large') {
//     if (size === 'small') {
//         return `ordering a small chai`
//     } if (size === 'medium') {
//         return `ordering a medium chai`
//     }
//     return `ordering a large chai`
// }
function orderChai(size) {
    return `ordering a ${size} chai`;
}
console.log(orderChai('medium'));
//# sourceMappingURL=typeNarrowing.js.map