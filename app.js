document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const task = input.value.trim();
        if (task) {
            addTodo(task);
            input.value = '';
        }
    });

    function addTodo(task) {
        const li = document.createElement('li');
        li.textContent = task;
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.className = 'delete-btn';
        delBtn.onclick = function() {
            list.removeChild(li);
        };
        li.appendChild(delBtn);
        list.appendChild(li);
    }
});
