import React from "react";

export default class BackButton extends React.Component{
	render(){
		return <button onClick={this.props.backHandle} className="btn btn-warning">← Back</button>
	}
}