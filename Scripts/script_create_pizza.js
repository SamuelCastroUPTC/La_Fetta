const selectPizza = document.getElementById('selectSaborP1');

    selectSaborP1.addEventListener('change', function() {
            const opcionSeleccionada = selectPizza.value;
            const image= document.getElementById('imageR');
            switch (opcionSeleccionada) {
                case 'queso':
                    image.src='images/PizzaCarnes.png';
                    break;

                case 'carnes':
                    image.src='images/PizzaCarnes.png';
                    break;

                case 'champiñones':
                    image.src='images/PizzaChampiñones.png';
                    break;

                case 'costillitas':
                    image.src='images/PizzaCostillitas.png';
                    break;

                case 'frutas':
                    image.src='images/PizzaFrutas.png';
                    break;

                case 'hawaiana':
                    image.src='images/PizzaHawaiana.png';
                    break;

                case 'mexicana':
                    image.src='images/PizzaMexicana.png';
                    break;

                case 'peperoni':
                    image.src='images/PizzaPeperoni.png';
                    break;

                case 'pollo':
                    image.src='images/PizzaPollo.png';
                    break;

                case 'vegetariana':
                    image.src='images/PizzaVegetariana.png';
                    break;

                case 'italiana':
                    image.src='images/PizzaItaliana.png';
                    break;

                default:
                    
                    break;
            }
        });

        const selectPizza2 = document.getElementById('selectSaborP2');

    selectSaborP2.addEventListener('change', function() {
            const opcionSeleccionada = selectPizza2.value;
            const image= document.getElementById('imageL');
            switch (opcionSeleccionada) {
                case 'queso':
                    image.src='images/PizzaCarnes.png';
                    break;

                case 'carnes':
                    image.src='images/PizzaCarnes.png';
                    break;

                case 'champiñones':
                    image.src='images/PizzaChampiñones.png';
                    break;

                case 'costillitas':
                    image.src='images/PizzaCostillitas.png';
                    break;

                case 'frutas':
                    image.src='images/PizzaFrutas.png';
                    break;

                case 'hawaiana':
                    image.src='images/PizzaHawaiana.png';
                    break;

                case 'mexicana':
                    image.src='images/PizzaMexicana.png';
                    break;

                case 'peperoni':
                    image.src='images/PizzaPeperoni.png';
                    break;

                case 'pollo':
                    image.src='images/PizzaPollo.png';
                    break;

                case 'vegetariana':
                    image.src='images/PizzaVegetariana.png';
                    break;

                case 'italiana':
                    image.src='images/PizzaItaliana.png';
                    break;

                default:
                    
                    break;
            }
        });