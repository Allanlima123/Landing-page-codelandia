const menuHamburguer = document.querySelector('.hamburguer');
const navbar = document.querySelector('.navbar');

menuHamburguer.onclick = () =>{
    menuHamburguer.classList.toggle('active');
    navbar.classList.toggle('active');
};