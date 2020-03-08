var animals = [
	{ name: 'Fluffykins', species: 'rabbit' },
	{ name: 'Caro', species: 'dog' },
	{ name: 'Hamilton', species: 'dog' },
	{ name: 'Harold', species: 'fish' },
	{ name: 'Ursula', species: 'fish' },
	{ name: 'Jimmy', species: 'cat' }
];

let details = animals.map(animal => `${animal.name} is a ${animal.species}`);

details;

// Without using a builtin function

function mapper(arr, fx) {
	let storage = [];
	for (let item of arr) {
		storage.push(fx(item));
	}
	return storage;
}

let newDetails = mapper(animals, function(animal) {
	return `${animal.name} is a ${animal.species}`;
});

newDetails;
