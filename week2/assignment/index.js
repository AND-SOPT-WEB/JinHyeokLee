import members from './data/members.js';

// 스크롤 시 header 불투명하게
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

// load data 구현
const getMembersData = () => {
  const storedData = localStorage.getItem('membersData');
  if (storedData) {
    return JSON.parse(storedData);
  } else {
    localStorage.setItem('membersData', JSON.stringify(members));
    return members;
  }
};

let membersData = getMembersData();

const loadData = (membersData) => {
  membersData.forEach((member) => {
    const tr = document.createElement('tr');
    const tbody = document.querySelector('tbody');

    const {
      id,
      name,
      englishName,
      github,
      gender,
      role,
      firstWeekGroup,
      secondWeekGroup,
    } = member;

    tr.innerHTML = `
        <td><input type="checkbox" /></td>
        <td>${name}</td>
        <td>${englishName}</td>
        <td><a href="https://github.com/${github}" target="_blank">${github}</a></td>
        <td>${gender === 'male' ? '남자' : '여자'}</td>
        <td>${role}</td>
        <td>${firstWeekGroup}</td>
        <td>${secondWeekGroup}</td>
    `;

    tbody.appendChild(tr);
  });
};

loadData(membersData);

// filter 초기화 구현
const resetBtn = document.querySelector('.reset_btn');

const resetFilter = () => {
  const allInputValue = document.querySelectorAll('.form_box > input');
  const allSelect = document.querySelectorAll('.form_box select');

  allInputValue.forEach((input) => {
    input.value = '';
  });

  allSelect.forEach((select) => {
    select.selectedIndex = 0;
  });
};

resetBtn.addEventListener('click', resetFilter);

// table checkbox all

const thCheckbox = document.querySelector('#th_checkbox');
const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');

const isAllChecked = () => {
  const allCheckbox = document.querySelectorAll('tbody input[type="checkbox"]');
  return Array.from(allCheckbox).every((checkbox) => checkbox.checked);
};

const handleAllChecked = () => {
  const allCheckbox = document.querySelectorAll('tbody input[type="checkbox"]');

  allCheckbox.forEach((checkbox) => {
    checkbox.checked = thCheckbox.checked;
  });
};

const updateThCheckbox = () => {
  thCheckbox.checked = isAllChecked();
};

thCheckbox.addEventListener('click', handleAllChecked);

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', updateThCheckbox);
});
