const menu = document.querySelector('#mobile-menu');

const menuLinks=document.querySelector('.nav-menu');

menu.addEventListener('click',function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Initialize Swiper
const swiper = new Swiper('.swiper', {
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
// Optional parameters 
loop: true,

// If we need pagination
pagination: {
    el: '.swiper-pagination',
    clickable:true
},

// Navigation arrows
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
}, 
}); 
// to do:fix error in console
$(document).ready(function(){
    $(".counterup").counterUp({
        delay:10,
        time:1200
    });
});

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });