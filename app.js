// Initialise all components 

let heading = document.querySelector('.card-title');
let taskInput = document.querySelector('#task');
let submitBtn = document.querySelector('#submit_button');
let filterTask = document.querySelector('#filterTasks');
let clearBtn = document.querySelector('#clear_tasks');
let taskItems = document.querySelector('.task-items');

// Load all event listeners 
// Capture the user input
// taskInput.addEventListener('keyup', function(e){
//     console.log(e.target.value);
// });

// Submit the user input as a task 
submitBtn.addEventListener('click', addTask);


// Add Task 
function addTask(e) {
    // grab the user input 
    // console.log(taskInput.value);
    let userInput = taskInput.value;
    if(userInput === ''){
        alert('Please enter a valid task');
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(userInput));
        taskItems.appendChild(li);

        taskInput.value = '';

        e.preventDefault();
    }
    
}