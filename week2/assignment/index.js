import members from './data/members.js';

const loadData = () => {
  members.forEach((member) => {
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

loadData();
