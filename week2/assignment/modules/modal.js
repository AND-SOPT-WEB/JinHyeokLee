import { addMember } from './table.js';

const validateNewInput = () => {
  const name = document.querySelector('#modal_name').value.trim();
  const englishName = document.querySelector('#modal_englishName').value.trim();
  const github = document.querySelector('#modal_github').value.trim();
  const gender = document.querySelector('#modal_gender').value;
  const role = document.querySelector('#modal_role').value;
  const firstWeekGroup = document.querySelector('#modal_week1').value.trim();
  const secondWeekGroup = document.querySelector('#modal_week2').value.trim();

  if (
    !name ||
    !englishName ||
    !github ||
    !gender ||
    !role ||
    !firstWeekGroup ||
    !secondWeekGroup
  ) {
    alert('모든 필드를 선택 및 채워주세요!!');
    return false;
  }

  return true;
};

export const initModal = () => {
  const modalOpenBtn = document.querySelector('.modal_open_btn');
  const modal = document.querySelector('.modal');
  const addBtn = modal.querySelector('.add_btn');

  modalOpenBtn.addEventListener('click', () => {
    modal.showModal();
    document.body.style.overflow = 'hidden'; // modal 열리면 scroll 막기
  });

  modal.addEventListener('close', () => {
    document.body.style.overflow = 'auto';
  });

  addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (!validateNewInput()) {
      return;
    }

    const newMember = {
      id: Date.now(), // 고유 ID를 위한 현재 시간 (number)
      name: document.querySelector('#modal_name').value,
      englishName: document.querySelector('#modal_englishName').value,
      github: document.querySelector('#modal_github').value,
      gender: document.querySelector('#modal_gender').value,
      role: document.querySelector('#modal_role').value,
      firstWeekGroup: Number(document.querySelector('#modal_week1').value),
      secondWeekGroup: Number(document.querySelector('#modal_week2').value),
    };

    addMember(newMember);
    modal.close();
  });
};
