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

export { addTodoItem };
