
//icons 
var removeIcon = '<span class="glyphicon glyphicon-trash"></span>';
var completeIcon = '<span class="glyphicon glyphicon-ok"></span>';

// User clicked on the ad button
// If there is any text inside item field, add that text to the todo list

document.getElementById('add').addEventListener('click', function(){
	var value = document.getElementById('item').value;
	if(value) {
		addItemTodo(value);
		document.getElementById('item').value = "";
	}

});


function removeItem() {
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;

	parent.removeChild(item);
}

function completeItem() {
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;
	var id = parent.id;

	var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

	parent.removeChild(item);
	target.insertBefore(item, target.childNodes[0]);
}


//add new items in todo list

function addItemTodo(text) {
	var list = document.getElementById('todo');

	var item = document.createElement('li');
	item.innerText = text;

	var buttons = document.createElement('div');
	buttons.classList.add('buttons');

	var remove = document.createElement('button');
	remove.classList.add('remove');
	remove.innerHTML = removeIcon;

	// add click event for removing the item
	remove.addEventListener('click', removeItem);

	var complete = document.createElement('button');
	complete.classList.add('complete');
	complete.innerHTML = completeIcon;

	// add click event for completeting the item;
	complete.addEventListener('click', completeItem)

	buttons.appendChild(remove);
	buttons.appendChild(complete);
	item.appendChild(buttons);

	list.insertBefore(item, list.childNodes[0]);
	// list.appendChild(item);
}