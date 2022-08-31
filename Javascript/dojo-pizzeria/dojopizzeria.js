function pizzaOven(one, two, three, four) {
    var pizza = { crustType: one, sauceType: two, cheeses: three, toppings: four };
    // pizza.crustType = one;
    // pizza.sauceType = two;
    // pizza.cheeses = three;
    // pizza.toppings = four;
    return pizza;
}
var pizza1 = pizzaOven("deepdish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("stuffed crust", "basil tomato", "buffalo mozzarella", ["mushrooms", "black olives", "red peppers"]);
console.log(pizza3);

var pizza4 = pizzaOven("thin crust", "traditional", ["mozzarella", "gorgonzola", "parmisan", "goat cheese"], ["cherry tomatoes", "basil"]);
console.log(pizza4);
