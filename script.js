document.addEventListener('DOMContentLoaded', function () {
    const todoInput = document.getElementById('todo-input');
    const addTodoButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');

    function addTodo() {
        const taskText = todoInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete task';
        deleteButton.addEventListener('click', function () {
            todoList.removeChild(li);
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
        todoInput.value = '';
    }

    addTodoButton.addEventListener('click', addTodo);

    todoInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
});
