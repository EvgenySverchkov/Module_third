import React from "react";

import BirthdayLabel from "./BirthdayLabel";
import BirthdayInput from "./BirthdayInput";

export default function AgeGroup() {
	return (
		<div className="form-group">
			<BirthdayLabel/>
			<BirthdayInput/>
		</div>
	);
}