const url = 'https://api-basketball.p.rapidapi.com/teams?season=2023-2024&league=12';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f87c0306c0mshf099b2b2a70e850p11c127jsnb56217143d48',
		'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'

	}
};
fetch(url, options)
.then(response => {
	return response.json();
})
.then(data => {
	data = data.response
	console.log(data)
	data.forEach(team =>{
		const markup = `<li>${team.name}</li>`;
		document.querySelector('ul').insertAdjacentHTML('beforeend', markup)
	});
})

.catch(err => {
	console.log(err);
});