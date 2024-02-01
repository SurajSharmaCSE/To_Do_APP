// Sample categories for demonstration
const categories = ["Personal", "Work", "Shopping"];

function initCategories() {
    const categoryList = document.getElementById("categoryList");

    categories.forEach(category => {
        const li = document.createElement("li");
        li.textContent = category;
        li.addEventListener("click", () => showTasksForCategory(category));
        categoryList.appendChild(li);
    });
}

function showTasksForCategory(category) {
    // This is a placeholder function, you can customize it based on your needs
    alert(`Showing tasks for category: ${category}`);
}

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = `
        <span>${taskInput.value}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

function deleteTask(btn) {
    var li = btn.parentNode;
    li.parentNode.removeChild(li);
}

document.addEventListener("DOMContentLoaded", () => {
    initCategories();
});
