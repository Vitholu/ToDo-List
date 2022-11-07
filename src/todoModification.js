let temporalStorage = [];

function addTodoItem(title, description, dueDate, priority, category) {
	let todo = {
		title: title,
		description: description,
		dueDate: dueDate,
		priority: priority,
		category: category,
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
		title: 'Run Away',
	};
	removeTodoItem(title);
	addTodoItem(editedItem);
	return temporalStorage;
}

function returnObjectArray() {
	let objectArray = [];
	for (const todo of temporalStorage) {
		objectArray.push(todo);
	}
	return objectArray;
}

export { addTodoItem, removeTodoItem, editTodoItem, returnObjectArray };
