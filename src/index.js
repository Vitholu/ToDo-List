import {
	addTodoItem,
	removeTodoItem,
	editTodoItem,
} from './todoModification.js';

addTodoItem('title', 'desc', 'date', 'prio');
addTodoItem('beep', 'desc', 'date', 'prio');
addTodoItem('rawr', 'desc', 'date', 'prio');
console.log(removeTodoItem('rawr'));
editTodoItem('beep');
