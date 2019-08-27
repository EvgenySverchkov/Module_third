import React from "react";

export default function Table({dataUser}){
	return <table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">Property</th>
						<th scope="col">Value</th>
					</tr>
				</thead>
				<tbody>
					{dataUser.map((el,ind,arr) => <tr key={ind}>
						<td>{el[0]}</td>
						<td>{JSON.stringify(el[1])}</td>
					</tr>)}
				</tbody>
			</table>
}