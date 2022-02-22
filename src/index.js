document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask(e.target[0].value)
    form.reset();
  });
});

function addTask(task) {
  const li = document.createElement('li');
  li.textContent = `${task} `
  document.querySelector('#tasks').appendChild(li);
  const btn = document.createElement('button');
  btn.addEventListener('click', doDelete);
  btn.textContent = 'x'
  li.appendChild(btn)
}


function doDelete(e) {
  e.target.parentNode.remove()
}