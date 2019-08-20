import React from 'react';

export default class UserTable extends React.Component{
	state = {
		user: []
	}
	componentDidMount(){
		fetch(`https://jsonplaceholder.typicode.com/users/${this.props.idUser}`)
			.then(res => {
				if(res.status===404){
					return {};
				}
				else{
					return res.json();
				}})
			.then(data=>this.setState({user: data}));
	}
	render(){
		let component = null;
		var obj = this.state.user;
		if(obj.keys!=0){
			console.log(obj.keys);
			component=<table>
					<tbody>
						{Object.keys(obj).map(key => <tr key={key}><td>{key}</td><td>{JSON.stringify(obj[key])}</td></tr>)}
					</tbody>
				</table>;
		}
		else{
			component = <></>;
		}
		return component;
	}
}