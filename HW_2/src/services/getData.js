export default ({idUser}) => fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`)
	.then(res => {
		if(res.status===404){
			return [];
		}
		else{
			return res.json();
		}
	});