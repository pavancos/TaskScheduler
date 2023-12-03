


// Get the modal
var modal = document.getElementById('taskForm');

// Get the button that opens the modal
var btn = document.getElementById('add');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// Function to close the form
function closeForm() {
  modal.style.display = 'none';
}

// Function to add a task to the list
function addTask() {
  var taskTitle = document.getElementById('taskTitle').value;
  var taskDesc = document.getElementById('taskDesc').value;
  var taskTime = document.getElementById('taskTime').value;
  var taskDate = document.getElementById('taskDate').value;
  var taskAssign = document.getElementById('taskAssign').value;

  // Create a new task element
  var newTask = document.createElement('div');
  newTask.className = 'task';

  // Populate the task element
  newTask.innerHTML = `
    <input type="checkbox" id="done">
    <div class="taskholder">
      <label id="task-title" for="done">${taskTitle}</label>
      <br><label id="task-desc" for="done">${taskDesc}</label>
      <br><label id="task-time" for="done">${taskTime}</label>
      <br><label id="task-date" for="done">${taskDate}</label> 
    </div>
  `;
  /* <br><label id="task-assign" for="done">${taskAssign}</label> */
  // Append the new task to the task list
  document.getElementById('placer').appendChild(newTask);

  // Close the form
  closeForm();
}

function removeTaskWithDelay() {
  var doneCheckbox = document.getElementById('done');
  var task = doneCheckbox.closest('.task');
  var taskLabels = task.querySelectorAll('.taskholder label');

  if (doneCheckbox.checked) {
    // Apply strikethrough to labels
    taskLabels.forEach(function (label) {
      label.style.textDecoration = 'line-through';
    });

    // Delay the removal and fading by 1 second (adjust the time as needed)
    setTimeout(function () {
      // Remove the task
      task.remove();
    }, 1000);
  }
}

// Attach the removeTaskWithDelay function to the change event of the checkbox
document.getElementById('done').addEventListener('change', removeTaskWithDelay);