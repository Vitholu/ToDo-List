import {
	addTodoItem,
	removeTodoItem,
	editTodoItem,
	returnObjectArray,
} from './todoModification.js';
import { categoryTodo } from './categorizeTodo.js';
import { format } from 'date-fns';

let today = new Date();
let newDate = format(new Date(today), 'MM/dd/yyyy');
