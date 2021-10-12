/*window.addEventListener('scroll', function() {
  document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
}); */

// Когда пользователь прокручивает вниз 80px от верхней части документа, измениться размер отступа навигационной панели и размер шрифта логотипа
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 10) {
    document.getElementById("header").classList.add("header_shadow");
  } else {
    document.getElementById("header").classList.remove("header_shadow");
  }
};

let g = 0;

/*   Работа с ВидеоПлеером   */
let i = 0;

play.onclick = function playPause() {
  if ( i%2 == 0 ){
    document.getElementById('bg').style.opacity = "0";
    document.getElementById('play').classList.remove("section_what_video_play");
    document.getElementById('play').classList.add("section_what_video_pause");
    document.getElementById('video').style.opacity = "1";
    document.getElementById('video').play();
    i++;
    g=i+g;
  } else {
    document.getElementById('video').pause();
    i++;
    g=i+g;
    document.getElementById('play').classList.remove("section_what_video_pause");
    document.getElementById('play').classList.add("section_what_video_play");
  }
};

//Скролл

(function(){
let speed = 1.5; // Скорость скролла.

let scroll = document.querySelector('.section_photo_collage');

let left = 0; // отпустили мышку - сохраняем положение скролла
let drag = false;
let coorX = 0; // нажали мышку - сохраняем координаты.

scroll.addEventListener('mousedown', function(e) {
  drag = true;
  coorX = e.pageX - this.offsetLeft;
});
document.addEventListener('mouseup', function() {
  drag = false;
  left = scroll.scrollLeft;
});
scroll.addEventListener('mousemove', function(e) {
  if (drag) {
    this.scrollLeft = left - (e.pageX - this.offsetLeft - coorX)*speed;
  }
});

})();

///

let del = document.querySelector('.form_block_form_button');

del.onclick = function() {
  document.querySelector('.form_reg').style.display = "none";
  document.querySelector('.form_complite').style.display = "flex";
};

/// Burger Menu

let m = 0;
let burger = document.querySelector('.header__burger');

burger.onclick = function() {
   if ( m%2 == 0 ){
    document.getElementById("header").classList.add("header_shadow");
    document.querySelector('.header__menu').style.display = "flex";
    m++;
    g=m+g;
  } else {
    document.getElementById("header").classList.remove("header_shadow");
    document.querySelector('.header__menu').style.display = "none";
    m++;
    g=m+g;
  }
};


