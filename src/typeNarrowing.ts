// Type Narrowing




function getChai(kind: string | number) {
    if (typeof kind === 'string') {
        return `making ${kind} of chai ....`
    }
    return `chai order :${kind}`
}

function severChai(msg?: string) {
    if (msg) {
        return `Serving${msg}`
    }
    return `serving default masala chai`
}

function orderChai(size: 'small' | 'medium' | 'large') {
    if (size === 'small') {
        return `ordering a small chai`
    } if (size === 'medium') {
        return `ordering a medium chai`
    }
    return `ordering a large chai`

}

// function orderChai(size: 'small' | 'medium' | 'large') {
//     return `ordering a ${size} chai`
// }

console.log(orderChai('medium'));

class kulhadChai {
    serve() {
        return 'serving kulhad chai'
    }
}


class Cutting {
    serve() {
        return 'serving cutting chai'
    }
}

function serve(chai: kulhadChai | Cutting) {
    if (chai instanceof kulhadChai) {
        return chai.serve()
    }

}

