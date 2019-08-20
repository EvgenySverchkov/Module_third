import React from 'react';
import "./UserInfoTable.css";
import BackButton from "./BackButton.js"


export default class UserInfoTable extends React.Component{
	state = {
		user: []
	}
	componentDidMount(){
		fetch(`https://jsonplaceholder.typicode.com/users/${this.props.idUser}`)
			.then(res => {
				if(res.status===404){
					return [];
				}
				else{
					return res.json();
				}})
			.then(data=>this.setState({user: Object.entries(data)}));
	}
	render(){
		var obj = this.state.user;

		let component = null;
		if(obj.length === 0){
			component=<div>User not found</div>;
		}else{
			component= <div className="tableWraper">
				<table className="table table-striped">
					<thead>
						<tr>
							<th scope="col">Property</th>
							<th scope="col">Value</th>
						</tr>
					</thead>
					<tbody>
						{obj.map((el,ind,arr) => <tr key={ind}>
														<td>{el[0]}</td>
														<td>{JSON.stringify(el[1])}</td>
													</tr>)}
					</tbody>
				</table></div>;
		}
		return <>{component} <BackButton backHandle={this.props.backHandler}/></>;
	}
}