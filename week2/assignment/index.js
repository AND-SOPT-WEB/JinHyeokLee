import { initFilter } from './modules/filter.js';
import { initModal } from './modules/modal.js';
import { initTable } from './modules/table.js';

const header = document.querySelector('header');

const isScroll = () => {
  if (window.scrollY > 0) {
    return true;
  } else {
    return false;
  }
};

window.addEventListener('scroll', () => {
  if (isScroll()) {
    header.classList.add('on');
  } else {
    header.classList.remove('on');
  }
  window.scrollY;
});

initTable();
initFilter();
initModal();
