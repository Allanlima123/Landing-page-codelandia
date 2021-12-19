const menuHamburguer = document.querySelector('.hamburguer');
const navbar = document.querySelector('.navbar ul');

menuHamburguer.onclick = () =>{
    menuHamburguer.classList.toggle('active');
    navbar.classList.toggle('active');
};

window.onscroll.onclick = () =>{
    menuHamburguer.classList.remove('active');
    navbar.classList.remove('active');
};