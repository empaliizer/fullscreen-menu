// Definerar våra variabler
const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
const menuIcon = document.querySelector('.menu-button i');

//Menyknapp så att man kan klicka på den
menuButton.addEventListener('click', () => {

    let iconText = menuIcon.textContent; //Byter hamburgaremenyn till ett kryss
    if ( iconText === 'drag_handle' ) {
        menuIcon.textContent = 'close';
    } else {
        menuIcon.textContent = 'drag_handle';
    }

    //Add class to menu 
    menu.classList.toggle('menu--active'); //Toggle menas i det här fallet är att den växlar mellan add och remove
});

    

