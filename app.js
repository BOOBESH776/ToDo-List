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

    Task_Card.innerHTML += `
    
    <div class="card-body d-flex justify-content-between align-items-center mb-2" style="width:24.8rem;">

        <span class="d-flex gap-2 align-items-center task-left">
            <input type="checkbox" class="check">

            <span class="task-text">${UserTask}</span>
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
    `;

    input.value = "";

    //finished task

    let checks = document.querySelectorAll(".check");
    checks.forEach((item) => {
        item.addEventListener("change", function () {
            let taskText = this.nextElementSibling;
            if (this.checked) {
                taskText.style.textDecoration = "line-through";
                taskText.style.color = "green";
            } else {
                taskText.style.textDecoration = "none";
                taskText.style.color = "black";
            }
        });
    });

    //remove task

    let remove = document.querySelectorAll(".delete");
    remove.forEach((items) => {
        items.addEventListener("click", function () {
            this.closest(".card-body").remove();
        });
    });

    
    const edit = document.querySelectorAll(".edit");

    edit.forEach((items) => {
        items.addEventListener("click", function () {
            const cardBody = this.closest(".card-body");
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

            // save btn

            const saveBtn = cardBody.querySelector(".save-btn");
            saveBtn.addEventListener("click", function () {
                const newValue = cardBody.querySelector(".edit-input").value.trim();
                if (newValue === "") {
                    alert("Task cannot be empty");
                    return;
                }
                cardBody.querySelector(".edit-area").outerHTML = `
                <span class="task-text">
                    ${newValue}
                </span>
                `;
            });

            // cancel btn
            const cancelBtn = cardBody.querySelector(".cancel-btn");
            cancelBtn.addEventListener("click", function () {
                cardBody.querySelector(".edit-area").outerHTML = `
                <span class="task-text">
                    ${currentText}
                </span>
                `;
            });
        });
    });

}