import React from "react";
import PropTypes from "prop-types";
import { BsFillCheckCircleFill, BsFillTrashFill } from "react-icons/bs";

const Item = ({ title, isDone, id, onDelete, onCheck }) => {
	return (
		<div className="flex items-center justify-between px-5 py-3 my-10">
			<div>
				<h3
					className={`uppercase ${
						!isDone
							? "font-bold text-cream"
							: "font-thin text-gray-300 line-through"
					} text-5xl`}
				>
					{title}
				</h3>
			</div>

			<div className="flex items-center space-x-8">
				<BsFillCheckCircleFill
					onClick={() => onCheck(id)}
					className="text-4xl text-yellow cursor-pointer"
				/>
				<BsFillTrashFill
					onClick={() => onDelete(id)}
					className="text-4xl text-yellow cursor-pointer"
				/>
			</div>
		</div>
	);
};

Item.propTypes = {
	title: PropTypes.string,
	isDone: PropTypes.bool,
};

Item.defaultProps = {
	title: "Do something here",
	isDone: false,
};

export default Item;
