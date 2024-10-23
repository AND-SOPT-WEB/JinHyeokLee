import members from '../data/members.js';

const tbody = document.querySelector('tbody');

// data 로컬스토리지 초기 세팅
const getStorageData = () => {
  const storedMembers = JSON.parse(localStorage.getItem('membersData'));
  return storedMembers || [...members]; // 로컬 스토리지에 data 없으면 초기 members를 사용
};

export let membersData = getStorageData();

// members data 로드
export const loadData = (membersData) => {
  tbody.innerHTML = '';

  membersData.forEach((member) => {
    const tr = document.createElement('tr');

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
        <td><input type="checkbox" data-id="${id}" /></td>
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

// 선택 삭제
export const deleteSelectedMembers = () => {
  const checkboxes = document.querySelectorAll(
    'tbody input[type="checkbox"]:checked'
  );
  console.log(checkboxes);
  const idsToDelete = Array.from(checkboxes).map((checkbox) => {
    return Number(checkbox.dataset.id);
  });

  membersData = membersData.filter(
    (member) => !idsToDelete.includes(member.id)
  );

  localStorage.setItem('membersData', JSON.stringify(membersData));

  loadData(membersData);
};

const deleteButton = document.querySelector('.table_delete_btn');
deleteButton.addEventListener('click', deleteSelectedMembers);

// checkbox 업데이트
const updateCheckboxListeners = () => {
  const thCheckbox = document.querySelector('#th_checkbox');
  const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');

  const isAllChecked = () => {
    return Array.from(checkboxes).every((checkbox) => checkbox.checked);
  };

  const handleAllChecked = () => {
    checkboxes.forEach((checkbox) => {
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

export const initTable = () => {
  loadData(membersData); // 초기 데이터 로드
};
