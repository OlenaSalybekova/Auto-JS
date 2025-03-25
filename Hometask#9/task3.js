let car1 = {
    brand: "VV",
    model: "ID4",
    year: 2020
};

let car2 = {
    brand: "Infinity",
    model: "QX60",
    owner: 2016
};

let car3 = {
    ...car1,
    ...car2,
};

console.log (car3);