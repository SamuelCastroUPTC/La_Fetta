function choosePizza() {
    const formTitle= document.getElementById("titlePizza");
    var titlePizza = formTitle.innerText;
    const formImage= document.getElementById("imagePizza");
    var imagePizza = formImage.src;
    const formPrice= document.getElementById("pricePizza");
    var pricePizza = formPrice.innerText;
    var pizza = {name: titlePizza, Image: imagePizza, price:pricePizza};
    var pizzasJSON = localStorage.getItem('selectedPizzas');
    var pizzas = JSON.parse(pizzasJSON);
    if (!pizzas) {
        pizzas = [];
    }
    pizzas.push(pizza);
    pizzasJSON = JSON.stringify(pizzas);
    localStorage.setItem('selectedPizzas', pizzasJSON);
}