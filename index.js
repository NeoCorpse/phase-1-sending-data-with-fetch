// Add your code here
// const formData = {
// 	dogName: 'Byron',
// 	dogBreed: 'Poodle',
// };

// const configurationObject = {
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/json',
// 		Accept: 'application/json',
// 	},
// 	body: JSON.stringify(formData),
// };

// fetch('http://localhost:3000/dogs', configurationObject)
// 	.then(function (response) {
// 		return response.json();
// 	})
// 	.then(function (object) {
// 		console.log(object);
// 	});

function submitData(name, email) {
	return fetch('http://localhost:3000/users', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ name: name, email: email }),
	})
		.then((res) => res.json())
		.then((obj) => {
			let id = obj.id;
			document.body.textContent = id;
			console.log(id);
		})
		.catch((error) => {
			document.body.textContent = error.message;
		});
}
