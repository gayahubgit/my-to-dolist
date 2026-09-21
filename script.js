<script>
    function addTask() {

        const taskInput = document.getElementById("taskInput");
        const taskDate = document.getElementById("taskDate");
        const taskTime = document.getElementById("taskTime");

        const task = taskInput.value.trim();

        if (task === "") {
            alert("Please enter a task!");
            return;
        }

        if (taskDate.value === "") {
            alert("Please select a date!");
            return;
        }

        if (taskTime.value === "") {
            alert("Please select a time!");
            return;
        }

        // Create task
        const li = document.createElement("li");

        // Task information
        const taskInfo = document.createElement("div");
        taskInfo.className = "task-info";

        const taskName = document.createElement("div");
        taskName.className = "task-name";
        taskName.textContent = task;

        const taskDateTime = document.createElement("div");
        taskDateTime.className = "task-time";
        taskDateTime.textContent =
            "📅 " + taskDate.value + "   ⏰ " + taskTime.value;

        taskInfo.appendChild(taskName);
        taskInfo.appendChild(taskDateTime);

        // Complete button
        const completeButton = document.createElement("button");
        completeButton.className = "complete-btn";
        completeButton.textContent = "✓";

        completeButton.addEventListener("click", function () {
            taskName.classList.toggle("completed");

            if (taskName.classList.contains("completed")) {
                completeButton.textContent = "↩";
            } else {
                completeButton.textContent = "✓";
            }
        });

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {
            li.remove();
        });

        // Add everything to task
        li.appendChild(taskInfo);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);

        document.getElementById("taskList").appendChild(li);

        // Clear inputs
        taskInput.value = "";
        taskDate.value = "";
        taskTime.value = "";
    }
</script>
