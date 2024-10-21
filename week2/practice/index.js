let todoList = [];

const addTodo = () => {
  if (input.value === '') {
    return;
  }

  todoList.push(input.value);
  localStorage.setItem('todoList', JSON.stringify(todoList));

  input.value = '';
  loadData();
};

const print = (text, index) => {
  const li = document.createElement('li');
  li.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '삭제하기';
  deleteBtn.addEventListener('click', () => deleteTodo(index));

  li.appendChild(deleteBtn);
  ul.appendChild(li);
};

const deleteTodo = (index) => {
  todoList = todoList.filter((_, idx) => idx !== index);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  loadData();
};

const addButton = document.querySelector('.addButton');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

addButton.addEventListener('click', addTodo);

const loadData = () => {
  ul.innerHTML = '';
  const temp = JSON.parse(localStorage.getItem('todoList')) || [];
  todoList = temp;

  temp.forEach((todoText, index) => {
    print(todoText, index);
  });
};

const init = () => {
  loadData();
};

init();
