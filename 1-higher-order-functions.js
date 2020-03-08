var animals = [
	{ name: 'Fluffykins', species: 'rabbit' },
	{ name: 'Caro', species: 'dog' },
	{ name: 'Hamilton', species: 'dog' },
	{ name: 'Harold', species: 'fish' },
	{ name: 'Ursula', species: 'fish' },
	{ name: 'Jimmy', species: 'cat' }
];

// Without a Built in function
function finder(val) {
	let storage = [];
	for (let item of val) {
		if (item.species === 'dog') storage.push(item);
	}
	return storage;
}

// Using a built in function and a callback function
let dogs = animals.filter(function(animal) {
	return animal.species === 'dog';
});

//// Let's break the problem into two requirements
// What do we want to search for?

let isDog = function(animal) {
	return animal.species === 'dog';
};

function filtered(val, fx) {
	let storage = [];
	for (let item of val) {
		if (fx(item)) storage.push(item);
	}
	return storage;
}

// Now lets pass this callback function as a variable

let onlyDogs = animals.filter(isDog);
let justDogs = filtered(animals, isDog);

dogs;
onlyDogs;
justDogs;
finder(animals);
