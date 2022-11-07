import { returnObjectArray } from './todoModification.js';

function categoryTodo(cat) {
	let tempArray = returnObjectArray();
	const filteredItem = tempArray.filter((i) => i.category === cat);
	if (filteredItem !== undefined) {
		console.log(filteredItem);
	}
}

export { categoryTodo };
