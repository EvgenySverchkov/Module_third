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
		this.userId = userId;
		if(!this.userId){
			alert("You should enter userId to continue");
			this.setState({isTable:false});
		}else{
			this.setState({isTable:true});
		}
	}
	backHandler(){
		this.setState({isTable:false});
	}
	render(){
		const isTable = this.state.isTable;
		if(isTable){
			return <UserInfoTable idUser={this.userId} backHandler ={this.backHandler}/>;
		}
		
		else{
			return <Profile headerForSubmit={this.onSubmit}/>;
		}
	}
}

export default App;
