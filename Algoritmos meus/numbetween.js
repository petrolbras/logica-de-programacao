function NumBetween() {
	let min = Math.floor(Math.random() * 100 + 1);
	let max = Math.floor(Math.random() * 100 + 1);
	let numX = Math.floor(Math.random() * (max - min + 1) + min);

	if (min > max) {
		[min, max] = [max, min];
	}
	while (min == max) {
		min = Math.floor(Math.random() * 100 + 1);
		max = Math.floor(Math.random() * 100 + 1);
	}

	return { min, max, numX };
}

const resultado = NumBetween();
console.log(resultado.min);
console.log(resultado.numX);
console.log(resultado.max);
