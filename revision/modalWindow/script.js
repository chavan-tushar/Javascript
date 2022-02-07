'use strict';
const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

const funcOpenModal = function () {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};
const funcCloseModal = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', funcOpenModal);
}

closeModal.addEventListener('click', funcCloseModal);
overlay.addEventListener('click', funcCloseModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    funcCloseModal();
  }
});
