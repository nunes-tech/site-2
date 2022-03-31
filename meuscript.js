let botaoMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.menu');
botaoMenu.addEventListener('click', mostrarMenu);
function mostrarMenu(){
    menu.classList.toggle('ativo');
    if(menu.classList.contains("ativo")){
        botaoMenu.innerHTML = ("Menu ✖")
    } else {
        botaoMenu.innerHTML = ("Menu ☰")
    }
}