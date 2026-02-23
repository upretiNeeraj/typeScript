type orderChai = {
    type: string;
    sugar: number;
    strong: boolean
}


function makeChai(order: orderChai) {
    console.log(order);
};

function serveChai(order: orderChai) {
    console.log(order);
};

type teaRecipe = {
    water: number;
    milk: number;
};

class masalaChai implements teaRecipe {
    water = 100;
    milk = 50;
}