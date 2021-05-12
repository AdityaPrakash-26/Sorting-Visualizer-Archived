export function getInsertionSortAnimations(array) {
	const animations = [];
	insertionSort(array, animations);
	return animations;
}

function insertionSort(array, animations) {
	for (let i = 0; i < array.length; i++) {
		for (let j = i; j > 0; j--) {
			if (array[j] < array[j - 1]) {
				animations.push([j, j - 1]);
				animations.push([j, j - 1]);
				animations.push([j - 1, array[j]]);
				animations.push([j, array[j - 1]]);
				let temp = array[j];
				array[j] = array[j - 1];
				array[j - 1] = temp;
			}
		}
	}
}
