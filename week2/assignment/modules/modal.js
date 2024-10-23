export const initModal = () => {
  const modalOpenBtn = document.querySelector('.modal_open_btn');
  const modal = document.querySelector('.modal');

  modalOpenBtn.addEventListener('click', () => {
    modal.showModal();
    document.body.style.overflow = 'hidden'; // modal 열리면 scroll 막기
  });

  modal.addEventListener('close', () => {
    document.body.style.overflow = 'auto';
  });
};
