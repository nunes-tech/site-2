var botaoMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');
botaoMenu.addEventListener('click', mostrarMenu);
function mostrarMenu(){
    menu.classList.toggle('ativo');
}