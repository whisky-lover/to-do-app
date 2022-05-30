import React from "react";
import PropTypes from "prop-types";
import { BsFillCheckCircleFill, BsFillTrashFill } from "react-icons/bs";

const Item = ({ title, isDone, id, onDelete, onCheck }) => {
	return (
		<div>
			<div>
				<h3 className={`${isDone ? "text-green-400" : "text-red-500"}`}>
					{title}
				</h3>
			</div>

			<div>
				<BsFillCheckCircleFill onClick={() => onCheck(id)} />
				<BsFillTrashFill onClick={() => onDelete(id)} />
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
