'use strict'

let menu = document.querySelector('.menu');
let hideAll = document.querySelector('.hideAll');
let menuContainer = document.getElementById('menu-container');

function createMenu(target) {
    let li = document.querySelectorAll('#menu-container ul.menu li');
    target.classList.remove('burgerClose');
    target.classList.add('openMenu');
    for (let i = 0; i < li.length; i++) {
        li[i].style.display = 'block';
        li[i].classList.add('openMenu');
    }
};

function deleteMenu(target) {
    let li = document.querySelectorAll('#menu-container ul.menu li');
    for (let i = 0; i < li.length; i++) {
        li[i].classList.remove('openMenu');
        li[i].style.display = 'none';
    }
    target.classList.remove('openMenu');
    target.classList.add('burgerClose');
};

function openMenu(e) {
    let target = e.target;
    if (target.classList.contains('burgerClose')) {
        createMenu(target);
        document.body.style.overflow = 'hidden';
        hideAll.style.display = 'block';
    } 
};

function selectItem(e) {
    let target = e.target;
    if (target.className == 'openMenu') {
        console.log(target.className);
        deleteMenu(menu);
        document.body.style.overflow = '';
        hideAll.style.display = 'none';
    }
};

document.body.addEventListener('click', selectItem);
menu.addEventListener('click', openMenu);