'use strict';

const modalAdd = document.querySelector('.modal__add');
const btnAd = document.querySelector('.add__ad');
const modalBtnSubmit = document.querySelector('.modal__btn-submit');
const modalSubmit = document.querySelector('.modal__submit');
const catalog = document.querySelector('.catalog');
const modalItem = document.querySelector('.modal__item');

btnAd.addEventListener('click', () => {

   modalAdd.classList.remove('hide');
   modalBtnSubmit.disabled = true;

});

modalAdd.addEventListener('click', e => {

   const target = e.target;

   if (target.classList.contains('modal') || target.classList.contains('modal__close')) {
      modalAdd.classList.add('hide');
      modalSubmit.reset();
   }

});

catalog.addEventListener('click', e => {

   if (e.target.closest('.card')) {
      modalItem.classList.remove('hide');
   }

});

window.addEventListener('keydown', e => {

   if (e.keyCode === 27) {
      modalItem.classList.add('hide');
   }

});