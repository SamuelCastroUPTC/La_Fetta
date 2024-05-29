const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', ()=>{
    container.classList.add("active");
});
loginBtn.addEventListener('click', ()=>{
    container.classList.remove("active");
});

function iniciarSesion() {
    event.preventDefault();
    window.location.href = 'home.html';
    alert(document.getElementById('nameUsuario').value+ ', bienvenido de nuevo!');
}
function registrarse() {
    event.preventDefault();
    window.location.href = 'home.html';
    alert(document.getElementById('nameUsuarioRegister').value+ ', bienvenido!');
}