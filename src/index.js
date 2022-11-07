import {
	addTodoItem,
	removeTodoItem,
	editTodoItem,
	returnObjectArray,
} from './todoModification.js';
import { categoryTodo } from './categorizeTodo.js';
import { format } from 'date-fns';

// Date Formatting
let today = new Date();
let newDate = format(new Date(today), 'MM/dd/yyyy');

// Create Todo
console.log('Original Array: ');
addTodoItem(
	'Buy shoes',
	'no description',
	newDate,
	'Priority ==> ' + 1,
	'Shoes',
);
addTodoItem(
	'Buy jacket',
	'no description',
	newDate,
	'Priority ==> ' + 4,
	'Jacket',
);
addTodoItem(
	'Buy knife',
	'no description',
	newDate,
	'Priority ==> ' + 2,
	'Kitchen utilities',
);
console.log(returnObjectArray());

// Categories
console.log('By category: Shoes');
console.log(categoryTodo('Shoes'));
console.log('By category: Jacket');
console.log(categoryTodo('Jacket'));
console.log('By category: Kitchen Utilities');
console.log(categoryTodo('Kitchen utilities'));

// Delete Todo

console.log('Deleted one todo: Buy knife');
console.log(removeTodoItem('Buy knife'));

// // Edit Todo

// console.log('Edited Array(Buy shoes => Run Away)');
// console.log(editTodoItem("Byt"));
