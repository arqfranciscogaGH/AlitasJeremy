const idMenuPrinBoton= document.getElementById('idMenuPrinBoton');
const idMenuPrin=document.getElementById('idMenuPrin');
const idMenuNav=document.getElementById('idMenuNav');

idMenuPrinBoton.addEventListener('click',() =>
{

    idMenuPrin.classList.toggle('menuPrinMostrar'); 
    // idMenuNav.classList.toggle('menuPrinMostrar');
});