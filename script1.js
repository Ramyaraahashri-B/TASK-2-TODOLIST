const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a valid task.');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = '';
}

function removeTask(button) {
    const listItem = button.parentNode;
    taskList.removeChild(listItem);
}
