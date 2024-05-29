var pizzasJSON = localStorage.getItem('selectedPizzas');
var pizzas = JSON.parse(pizzasJSON);
if (!pizzas) {
    pizzas = [];
}

var divCar = document.getElementById('divCar');
for (var i = 0; i < pizzas.length; i++) {
    var pizza = pizzas[i];
    var img = document.createElement('img');
    img.src = pizza.Image;
    var h1 = document.createElement('h1');
    h1.innerHTML = pizza.name;
    var subDiv = document.createElement('div');
    subDiv.className = 'pizzasCar';
    subDiv.appendChild(h1);
    subDiv.appendChild(img);
    divCar.appendChild(subDiv);

}
localStorage.setItem('selectedPizzas', JSON.stringify(pizzas));

function pay() {
    var total = 0;
    for (var i = 0; i < pizzas.length; i++) {
        var pizza = pizzas[i];
        total += Number(pizza.price);
    }
    alert('Felicidades tu compra por: '+total+' va por parte de la casa');
}