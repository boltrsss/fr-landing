"use strict";

var slides = document.querySelectorAll('.slide');
var state = {
  currentSlide: 0
};
var MAX_PAGE_NAMBER = 7;

var showSlide = function showSlide() {
  slides[state.currentSlide].style.display = 'flex';
  var btns = slides[state.currentSlide].querySelectorAll('.btn__js');
  var progress = slides[state.currentSlide].querySelector('.slide__pagination');

  if (progress) {
    var page = Number(progress.dataset.page);
    var leftProgressList = progress.querySelector('.slide__page-list--left');
    leftProgressList.querySelectorAll("li").forEach(function (item, i) {
      if (i >= page - 1) {
        item.style.display = 'none';
      }
    });
    var rightProgressList = progress.querySelector('.slide__page-list--right');
    rightProgressList.querySelectorAll("li").forEach(function (item, i) {
      if (i >= MAX_PAGE_NAMBER - page) {
        item.style.display = 'none';
      }
    });
  }

  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      state.currentSlide += 1;
      showSlide();
    });
  });

  if (slides[state.currentSlide - 1]) {
    slides[state.currentSlide - 1].style.display = 'none';
  }
};

showSlide();
//# sourceMappingURL=main.js.map
