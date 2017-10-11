var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var squareNumbers = function (number){
			return number * number;
		}
		var newArray = arr.map(squareNumbers);
		return newArray;
	},

	sum: function (arr) {
		var sum = function(runningTotal, currentTotal) {
			return runningTotal + currentTotal;
		}
		var total = arr.reduce(sum,0)
		return total;
	},

	findDuplicates: function (arr) {
		var duplicates = [];
		var filterDuplicates = function (a, b) {
			if (a === b && !duplicates.includes(a)) duplicates.push(a);
		}
		arr.sort(filterDuplicates);

		// duplicates.pop();
		return duplicates;
	},

	// removeAndClone: function (arr, valueToRemove) {

	// },

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
