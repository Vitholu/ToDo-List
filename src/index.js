import {
	addTodoItem,
	removeTodoItem,
	editTodoItem,
	returnObjectArray,
} from './todoModification.js';

addTodoItem('title', 'desc', 'date', 'prio');
addTodoItem('beep', 'desc', 'date', 'prio');
addTodoItem('rawr', 'desc', 'date', 'prio');
console.log(removeTodoItem('rawr'));
// editTodoItem('beep');
console.log(returnObjectArray());
