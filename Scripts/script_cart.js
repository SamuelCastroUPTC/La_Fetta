function mostrarCarrito() {
    let divCarrito = document.querySelector('.carrito');
    divCarrito.innerHTML = '';

    carrito.forEach(function(item) {
        let divItem = document.createElement('div');
        divItem.textContent = item.nombre + ' - ' + item.precio + ' x ' + item.cantidad;
        divCarrito.appendChild(divItem);
    });
}

function mostrarCarrito() {
    let divCarrito = document.querySelector('.carrito');
    divCarrito.innerHTML = '';
    carrito.forEach(function(item) {
        let divItem = document.createElement('div');
        divItem.textContent = item.nombre + ' - ' + item.precio + ' x ' + item.cantidad;
        divCarrito.appendChild(divItem);
    });
}

