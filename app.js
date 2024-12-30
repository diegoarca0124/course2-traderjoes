
function openMenu(){
    var element = document.getElementById('MenuBar');

    if(element.classList.contains('d-none')){ //show
        element.classList.remove('d-none');
        document.getElementById('closeImg').classList.remove('d-none');
        document.getElementById('showImg').classList.add('d-none');
        document.getElementById('bookmark-nav').classList.remove('z-index-2');
        document.getElementById('main').classList.add('d-none');
    }else{ //hide
        element.classList.add('d-none');
        document.getElementById('closeImg').classList.add('d-none'); //4 x
        document.getElementById('showImg').classList.remove('d-none'); //3 ---
        document.getElementById('bookmark-nav').classList.add('z-index-2');
        document.getElementById('main').classList.remove('d-none');
    }
}

new Swiper("#swiper-1", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

new Swiper("#swiper-2", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});