import { loadData, membersData } from './table.js';

const getFilterValues = () => {
  const name = document.querySelector('#name').value;
  const englishName = document.querySelector('#englishName').value;
  const github = document.querySelector('#github').value;
  const gender = document.querySelector('#gender').value;
  const role = document.querySelector('#role').value;
  const firstWeekGroup = document.querySelector('#week1').value;
  const secondWeekGroup = document.querySelector('#week2').value;

  return {
    name,
    englishName,
    github,
    gender,
    role,
    firstWeekGroup,
    secondWeekGroup,
  };
};

const matchesFilters = (member, filters) => {
  return Object.entries(filters).every(([key, value]) => {
    // 필터값 없거나 select default 값일 때
    if (value === '') {
      return true;
    }

    // 금잔디 (Number)
    if (key === 'firstWeekGroup' || key === 'secondWeekGroup') {
      return member[key] === Number(value);
    }

    // 성별
    if (key === 'gender') {
      return member[key] === value;
    }

    return member[key].toLowerCase().includes(value.toLowerCase());
  });
};

// 초기화 버튼 클릭 시 input/select reset
const resetFilterInputs = () => {
  const allInputValue = document.querySelectorAll('.form_box > input');
  const allSelect = document.querySelectorAll('.form_box select');

  allInputValue.forEach((input) => {
    input.value = '';
  });

  allSelect.forEach((select) => {
    select.selectedIndex = 0;
  });
};

export const initFilter = () => {
  const resetBtn = document.querySelector('.reset_btn');
  const searchBtn = document.querySelector('.search_btn');

  resetBtn.addEventListener('click', () => {
    resetFilterInputs();
    loadData(membersData);
  });

  searchBtn.addEventListener('click', () => {
    const filterValues = getFilterValues();
    const filteredMembers = membersData.filter((member) =>
      matchesFilters(member, filterValues)
    );
    loadData(filteredMembers);
  });
};
