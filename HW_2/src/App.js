import React from 'react';
import Profile from "./components/Profile.js";
import UserInfoTable from "./components/UserInfoTable.js";
import "./App.css";

class App extends React.Component{
	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.backHandler = this.backHandler.bind(this);
		this.state = {isTable:false};
	}
	onSubmit(userId){
		this.setState({isTable:true});
		this.userId = userId;
	}
	backHandler(){
		this.setState({isTable:false});
	}
	render(){
		const isTable = this.state.isTable;
		let component = null;
		if(isTable){
			if(!this.userId){
				alert("You should enter userId to continue");
				component = <Profile header={this.onSubmit}/>;
			}
			else{
				component = <UserInfoTable idUser={this.userId} backHandler ={this.backHandler}/>;
			}
		}
		
		else{
			component = <Profile header={this.onSubmit}/>;
		}
		return component;
	}
}

export default App;