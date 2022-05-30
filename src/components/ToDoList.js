import React from "react";
import Item from "./Item";

const ToDoList = ({ items, onDelete, onCheck }) => {
	return (
		<div>
			{items.map((item, index) => (
				<Item
					key={index}
					id={item.id}
					title={item.title}
					isDone={item.isDone}
					onDelete={onDelete}
					onCheck={onCheck}
				></Item>
			))}
		</div>
	);
};

export default ToDoList;
