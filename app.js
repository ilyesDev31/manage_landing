const burger = document.querySelector('.burger');
const ul = document.querySelector('.container ul');
const overlay = document.querySelector('.overlay');


burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    ul.classList.toggle('active');
    overlay.classList.toggle('active');
})