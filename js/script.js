const menuHamburger = document.querySelector('.menu-hamburguer');
menuHamburger.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburger.classList.toggle('change');

    if(menuHamburger.classList.contains('change')){
        nav.style.display = 'block';
    } else{
        nav.style.display = 'none';
    }
}
const text = "Hi, i'm Matheus Alves";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // Altere o valor do timeout para ajustar a velocidade da digitação
  }
}

typeWriter();


