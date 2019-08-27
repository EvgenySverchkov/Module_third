import React from 'react';
import "./UserInfoTable.css";
import BackButton from "./BackButton.js";
import getData from '../services/getData.js';
import Table from "./Table.js";


export default class UserInfoTable extends React.Component{
	state = {
		user: []
	}
	componentDidMount(){
		getData(this.props).then(data=>this.changeDataUser(data));
	}
	changeDataUser(userData){
		this.setState({user: Object.entries(userData)});
	}
	render(){
		var obj = this.state.user;

		let component = null;
		if(obj.length === 0){
			component=<div>User not found</div>;
		}else{
			component= <div className="tableWraper"><Table dataUser={obj}/></div>;
		}
		return <>{component} <BackButton backHandle={this.props.backHandler}/></>;
	}
}