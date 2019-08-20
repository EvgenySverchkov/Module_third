import React from 'react';
import "./Profile.css";

export default class Profile extends React.Component{
	render(){
		return (<>
			<form className="form-inline" onSubmit={(e)=>{
				e.preventDefault();
				this.props.header(e.target.elements.userId.value);
			}}>
			<div className="form-group mb-2">
				<label forhtml='userId' className="col-lm-2 col-form-label">Input userId</label>
			</div>
			<div className="form-group mx-sm-3 mb-2">
				<input type="number" id="userId" className="form-control" placeholder="Eneter id"></input>
			</div>
			
			<button type="submit" className="btn btn-primary mb-2">Submit</button>
			</form>
		</>);
	}
}