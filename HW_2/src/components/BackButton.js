import React from "react";

export default function BackButton({backHandle}){
	return <button onClick={backHandle} className="btn btn-warning">← Back</button>;
}