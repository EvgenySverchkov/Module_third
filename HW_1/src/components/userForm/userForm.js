import { getDataFromForm } from "../../services/formUtils";

import React from "react";
import NameGroup from "./nameGroup";
import BirthdayGroup from "./birthdayGroup";
import SubmitButton from "./submitButton";

export default class UserForm extends React.Component{
	render(){
		return (
			<form className="user-form" onSubmit={(e)=>
				{
					e.preventDefault(); 
					this.props.formHeader(getDataFromForm(e.target));}}>
				<NameGroup/>
				<BirthdayGroup/>
				<SubmitButton/>
			</form>
		);
	};
}













/*export default function UserForm({ onSubmit = noop } = {}){
	const _onSubmit = e => {
    e.preventDefault();
    onSubmit(getDataFromForm(<NameGroup/>));
  };

	return (
		<form>
			<NameGroup/>
			<BirthdayGroup/>
			<SubmitButton listener = {_onSubmit}/>
		</form>
		);
}*/