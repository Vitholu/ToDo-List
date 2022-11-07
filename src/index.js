import {
	addTodoItem,
	removeTodoItem,
	editTodoItem,
	returnObjectArray,
} from './todoModification.js';
import { categoryTodo } from './categorizeTodo.js';

addTodoItem('title', 'desc', 'date', 'prio');
addTodoItem('beep', 'desc', 'date', 'prio', 'wew');
addTodoItem('das', 'desc', 'date', 'prio', 'wew');
addTodoItem('qwe', 'desc', 'date', 'prio', 'frs');
addTodoItem('rasq', 'desc', 'date', 'prio', 'frs');
addTodoItem('rawr', 'desc', 'date', 'prio');
// console.log(removeTodoItem('rawr'));
// editTodoItem('beep');
// console.log(returnObjectArray());
console.log(categoryTodo('wew'));
console.log(categoryTodo('frs'));
