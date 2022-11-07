let temporalStorage = [];

function addTodoItem(title, description, dueDate, priority) {
	let todo = {
		title: title,
		description: description,
		dueDate: dueDate,
		priority: priority,
	};
	temporalStorage.push(todo);
	return temporalStorage;
}

function removeTodoItem(title) {
	const removed = temporalStorage.filter((i) => i.title === title);
	let index;
	if (removed !== '') {
		index = temporalStorage.indexOf(removed);
		temporalStorage.splice(index, 1);
	}
	return temporalStorage;
}

function editTodoItem(title) {
	const filteredItem = temporalStorage.filter((i) => i.title === title);
	let editedItem = {
		title: prompt('new title:'),
	};
	removeTodoItem(title);
	addTodoItem(title);
}
export { addTodoItem, removeTodoItem, editTodoItem };
