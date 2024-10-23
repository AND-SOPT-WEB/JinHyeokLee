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

// localStorage 초기 세팅
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

// table checkbox all
const updateCheckboxListeners = () => {
  const thCheckbox = document.querySelector('#th_checkbox');
  const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');

  const isAllChecked = () => {
    const allCheckbox = document.querySelectorAll(
      'tbody input[type="checkbox"]'
    );
    return Array.from(allCheckbox).every((checkbox) => checkbox.checked);
  };

  const handleAllChecked = () => {
    const allCheckbox = document.querySelectorAll(
      'tbody input[type="checkbox"]'
    );

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
};

// load data 구현
const tbody = document.querySelector('tbody');

const loadData = (membersData) => {
  tbody.innerHTML = '';

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

  updateCheckboxListeners();
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

  loadData(membersData);
};

resetBtn.addEventListener('click', resetFilter);

// 필터 조건 검사

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

// 필터 값 가져오기
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

const searchBtn = document.querySelector('.search_btn');

searchBtn.addEventListener('click', () => {
  const filterValues = getFilterValues();
  const filteredMembers = membersData.filter((member) =>
    matchesFilters(member, filterValues)
  );

  loadData(filteredMembers);
});

// modal module

// modal open 로직
const modalOpenBtn = document.querySelector('.modal_open_btn');
const modal = document.querySelector('.modal');

modalOpenBtn.addEventListener('click', () => {
  modal.showModal();
  document.body.style.overflow = 'hidden'; // modal 열리면 scroll 막기
});

modal.addEventListener('close', () => {
  document.body.style.overflow = 'auto';
});
