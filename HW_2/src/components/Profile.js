import React from 'react';
import "./Profile.css";

export default class Profile extends React.Component{
	constructor(props){
		super(props);
		this.state = {value: ''};
		this.handleChangeInput = this.handleChangeInput.bind(this);
	}
	handleChangeInput(e){
		this.setState({value:e.target.value});
	}
	render(){
		return (<>
			<form className="form-inline" onSubmit={(e)=>{
				e.preventDefault();
				this.props.headerForSubmit(this.state.value);
			}}>
			<div className="form-group mb-2">
				<label forhtml='userId' className="col-lm-2 col-form-label">Input userId</label>
			</div>
			<div className="form-group mx-sm-3 mb-2">
				<input type="number" 
					   id="userId" 
					   className="form-control" 
					   placeholder="Eneter id"
					   value={this.state.value}
					   onChange={this.handleChangeInput}></input>
			</div>
			
			<button type="submit" className="btn btn-primary mb-2">Submit</button>
			</form>
		</>);
	}
}