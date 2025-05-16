const array = [3, 4, 5];

function soma(array) {
	let soma = 0;
	for (i in array) {
		soma += array[i];
	}
	return soma;
}

soma(array);
console.log(soma(array));
