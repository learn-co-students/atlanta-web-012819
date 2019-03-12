class TaskList {

	constructor(){

		this.taskArray = []
	}

	getLastTask(){

		return this.taskArray[this.taskArray.length-1]
	}
}
