import React, { useState } from "react";

const ToDoForm = ({ onAdd }) => {
	const [inputValue, setInputValue] = useState("");

	const handleOnChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		onAdd({ id: Math.random(), title: inputValue, isDone: false });
	};

	return (
		<div>
			<form onSubmit={handleOnSubmit}>
				<input type="text" onChange={handleOnChange} />
				<input type="submit" value="Add" />
			</form>
		</div>
	);
};

export default ToDoForm;
