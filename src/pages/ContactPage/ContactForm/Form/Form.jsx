import React from "react";
import Left from "../Left/Left";
import Right from "../Right/Right";

const Form = () => {
	return (
		<div className="flex sm:flex-row flex-col my-10">
			<Left></Left>
			<Right></Right>
		</div>
	);
};

export default Form;
