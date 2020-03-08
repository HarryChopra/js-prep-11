var orders = [{ amount: 250 }, { amount: 400 }, { amount: 150 }, { amount: 325 }, { amount: 25 }];

var total = orders.reduce((sum, order) => sum + order.amount, 0);

function reducer(arr, fx, start) {
	let sum = start;
	for (let item of arr) {
		fx(sum, item);
	}
	return total;
}

var newTotal = reducer(
	orders,
	function(sum, item) {
		sum += item;
	},
	0
);

newTotal;

total;
