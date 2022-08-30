function pizzaGenerator() {
    var randomPizza = { crustType, sauceType, cheeses, toppings };

    var crustType = ["deep dish", "hand tossed", "stuffed crust", "thin crust"];
    var sauceType = ["pesto", "traditional", "marinara", "basil tomato"];
    var cheeses = ["mozzarella", "parmisan", "goat cheese", "burrata", "buffalo mozzarella"];
    var toppings = ["cherry tomato", "pepperoni", "mushrooms", "olives", "pepper", "basil", "onion"];
    
    randomPizza.crustType = math.random(crustType);
    randomPizza.sauceType = math.random(sauceType);
    randomPizza.cheeses = math.random(cheeses);
    randomPizza.toppings = math.random(toppings);
    return randomPizza;
}
var pizza = randomPizza();