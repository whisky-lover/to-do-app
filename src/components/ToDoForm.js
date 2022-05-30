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
		<div className="px-5 py-10">
			<form onSubmit={handleOnSubmit} className="relative">
				<input
					type="text"
					onChange={handleOnChange}
					className="bg-cream placeholder:text-black w-full px-5 py-3 focus:border-0 focus:outline-none"
					placeholder="Add new task. Ex: Learn React"
				/>
				<input
					type="submit"
					value="Add"
					className="absolute bg-yellow text-black font-semibold text-lg px-6 py-2 z-10 h-full right-0 top-0 cursor-pointer uppercase"
				/>
			</form>
		</div>
	);
};

export default ToDoForm;
