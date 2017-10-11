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
		var sortDuplicates = function (a, b) {
			if (a === b && !duplicates.includes(a)) duplicates.push(a);
		}
		arr.sort(sortDuplicates);
		return duplicates;
	},

	removeAndClone: function (arr, valueToRemove) {
		var newArray = [];
		var filterForRemoval = function(value){
			if(value !== valueToRemove) newArray.push(value);
		}
		arr.filter(filterForRemoval);
		return newArray;
	},

	findIndexesOf: function (arr, itemToFind) {
		var newArray = [];
		var index = arr.indexOf(itemToFind);
		while (index != -1) {
			newArray.push(index);
			index = arr.indexOf(itemToFind, index + 1);
		}
		return newArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var filteredNumbers = [];
		var numberFilter = function (number) {
			if(number % 2 === 0) filteredNumbers.push(number)
		}
		arr.filter(numberFilter);

		return filteredNumbers.reduce(function(runningTotal, currentNumber){
        return runningTotal + (currentNumber * currentNumber);
    }, 0);
		// return total;
	}

}

module.exports = arrayTasks
