document.addEventListener("DOMContentLoaded", () => {
  const taskList = [];
  const taskListElement = document.getElementById("task-list");
  const todoForm = document.getElementById("todo-form");
  const newTaskInput = document.getElementById("new-task-input");

  const renderTasks = () => {
    taskListElement.innerHTML = "";
    taskList.forEach((task, index) => {
      const taskItem = document.createElement("div");
      taskItem.classList.add("todo-item");

      const taskText = document.createElement("li");
      taskText.textContent = task;
      taskItem.appendChild(taskText);

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("removeButton");
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });

      taskItem.appendChild(removeButton);
      taskListElement.appendChild(taskItem);
    });
  };

  const addTask = (task) => {
    if (task) {
      taskList.push(task);
      renderTasks();
    }
  };

  const removeTask = (index) => {
    taskList.splice(index, 1);
    renderTasks();
  };

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTask = newTaskInput.value.trim();
    addTask(newTask);
    newTaskInput.value = "";
  });

  //   addTask("Eat breakfast");
  //   addTask("Go to school");
  //   addTask("Go to work");
});
