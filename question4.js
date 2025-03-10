let tasks = [];

function addTask(id, name, description) {
    tasks.push({ id, name, description });
}

function getTasks() {
    return tasks;
}

function updateTask(id, newName, newDescription) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
    }
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
}

// Example usage
addTask(1, 'Study', 'Prepare for exams');
console.log(getTasks());
updateTask(1, 'Study Hard', 'Prepare well for exams');
console.log(getTasks());
deleteTask(1);
console.log(getTasks());
