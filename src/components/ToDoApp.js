import React, { useState } from "react";

import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

const ToDoApp = () => {
	const [items, setItems] = useState([
		{ id: 1, title: "Do something", isDone: true },
	]);

	const addItem = (newItem) => {
		const newItems = [...items, newItem];
		setItems(newItems);
	};

	const deleteItem = (id) => {
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
	};

	const checkItem = (id) => {
		const newItems = items.map((item) => {
			if (item.id === id) {
				item.isDone = !item.isDone;
			}

			return item;
		});
		setItems(newItems);
	};

	return (
		<>
			<ToDoForm onAdd={addItem}></ToDoForm>
			<ToDoList
				items={items}
				onDelete={deleteItem}
				onCheck={checkItem}
			></ToDoList>
		</>
	);
};

export default ToDoApp;
