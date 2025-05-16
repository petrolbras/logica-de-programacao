function selectsort(array) {
	let len = array.length;
	for (let i = 0; i < len + 1; i++) {
		let min_index = i;
		for (let j = i + 1; j < len; j++) {
			if (array[j] < array[min_index]) {
				min_index = j;
			}
		}
		if (min_index !== i) {
			[array[i], array[min_index]] = [array[min_index], array[i]];
		}
	}
}

const array = [20, 13, 439, 102, 52];
selectsort(array);
console.log(JSON.stringify(array));
