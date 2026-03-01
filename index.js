class car {
    constructor(model, year) {
        this.modal = model;
        this.yaer = year
    }

    start() {
        console.log(`starting ${this.modal}`);
    }
}


const myCar = new car("BMW", 2020);

console.log(myCar.start());

