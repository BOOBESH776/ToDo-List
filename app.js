let tasks = [];

function btn() {
    Task();
}

function Task() {

    let input = document.getElementById("user_task");
    let UserTask = input.value.trim();

    const Task_Card = document.getElementById("Task_Card");

    if (UserTask === "") {
        alert("Type Your Task");
        return;
    }

    Task_Card.insertAdjacentHTML("beforeend", `

        <div class="card-body d-flex justify-content-between align-items-center mb-2"
            style="width:24.8rem;">

            <span class="d-flex gap-2 align-items-center task-left">

                <input type="checkbox" class="check">

                <span class="task-text">
                    ${UserTask}
                </span>

            </span>

            <div class="d-flex gap-3 task-modify">

                <span class="edit" style="cursor:pointer;">
                    ✏️
                </span>

                <span class="delete" style="cursor:pointer;">
                    🗑️
                </span>

            </div>

        </div>

    `);

    tasks.push(UserTask);

    // TASK COUNT
    const TaskData = document.getElementById("TaskData");

    TaskData.innerHTML = `
        <span>Your Tasks : ${tasks.length}</span>
    `;

    input.value = "";
}

const Task_Card = document.getElementById("Task_Card");

Task_Card.addEventListener("change", function (e) {

    if (e.target.classList.contains("check")) {
        let taskText = e.target.nextElementSibling;

        if (e.target.checked) {

            taskText.style.textDecoration = "line-through";
            taskText.style.color = "green";

        } else {

            taskText.style.textDecoration = "none";
            taskText.style.color = "black";
        }
    }
});


Task_Card.addEventListener("click", function (e) {

    // DELETE TASK

    if (e.target.classList.contains("delete")) {

        e.target.closest(".card-body").remove();

        tasks.pop();

        const TaskData = document.getElementById("TaskData");

        TaskData.innerHTML = `
            <span>Your Tasks : ${tasks.length}</span>
        `;
    }


    // EDIT TASK

    if (e.target.classList.contains("edit")) {

        const cardBody = e.target.closest(".card-body");

        const taskText = cardBody.querySelector(".task-text");

        const currentText = taskText.innerText;

        taskText.outerHTML = `

            <span class="edit-area d-flex gap-2">

                <input 
                    type="text"
                    class="edit-input form-control"
                    value="${currentText}"
                >

                <button class="save-btn btn btn-success btn-sm">
                    ✔
                </button>

                <button class="cancel-btn btn btn-danger btn-sm">
                    ✖
                </button>

            </span>

        `;
    }


    // SAVE BTN

    if (e.target.classList.contains("save-btn")) {

        const cardBody = e.target.closest(".card-body");

        const inputField = cardBody.querySelector(".edit-input");

        const newValue = inputField.value.trim();

        if (newValue === "") {
            alert("Task cannot be empty");

        }

        cardBody.querySelector(".edit-area").outerHTML = `

            <span class="task-text">
                ${newValue}
            </span>

        `;
    }


    // CANCEL BTN

    if (e.target.classList.contains("cancel-btn")) {
        const cardBody = e.target.closest(".card-body");
        const inputField = cardBody.querySelector(".edit-input");
        const oldValue = inputField.defaultValue;
        cardBody.querySelector(".edit-area").outerHTML = `
            <span class="task-text">
                ${oldValue}
            </span>

        `;
    }

});