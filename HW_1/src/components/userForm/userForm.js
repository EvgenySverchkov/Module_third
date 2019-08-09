import { getDataFromForm } from "../../services/formUtils";

import React from "react";
import PropTypes from 'prop-types';

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

UserForm.propTypes = {
	formHeader: PropTypes.func
};