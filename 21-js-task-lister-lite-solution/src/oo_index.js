
document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector('form')

	form.addEventListener('submit', handleAddTask)
});

const taskList  = new TaskList();


function handleAddTask(e){

	console.log("this works!")

	e.preventDefault()

	const newTask = e.target.querySelector("#new-task-description").value

	//console.log(newTask)
	// //taskList.taskArray.push(newTask)

	renderTask(newTask)

	e.target.reset()
}

function renderTask(newTask){

	const ul = document.querySelector("#tasks")

	const li = document.createElement('li')

	li.textContent = newTask

	ul.appendChild(li)
}