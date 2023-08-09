'use strict'

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".pots");
    const Copy = document.getElementById("copywrite");
    const Body = document.querySelector("body");
    const elementMenu = document.querySelector(".li");

    console.log(menu, elementMenu);

    menu.addEventListener('click', () => {
        console.log('clique menu');
        elementMenu.classList.toggle('block')
    })

    // if (!Copy) {
    //     Body.innerHTML = " ";
    // }

})