'use strict'

document.addEventListener("DOMContentLoaded", ()=>{
    const menu = document.querySelector(".pots");
    const elementMenu = document.querySelector(".li");
    console.log(menu, elementMenu);

    menu.addEventListener('click', ()=>{
        console.log('clique menu');
        elementMenu.classList.toggle('block')
    })

})