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

	// FindDuplicates Alternate Solutions:

	// findDuplicates: function (arr) {
  //   var counts = {}
  //   var countNumber = n =>
  //     (counts[n] === undefined) ? counts[n] = 1 : counts[n] += 1
  //   arr.forEach(countNumber)
  //   var isDuplicate = n => counts[n] >= 2
  //   return Object.keys(counts).filter(isDuplicate)
  // },

	// Alice Rees Solution:
	// findDuplicates: function (arr) {
  // var dupeArray = [];
  // for (var i = 0; i < arr.length; i++) {
  //  if ( (arr.lastIndexOf(arr[i]) !== i ) &&
  //     (dupeArray.indexOf(arr[i]) == -1)) {
  //      dupeArray.push(arr[i]);
  //  	}
  // 	}
  // 	return dupeArray;
  // },

	//Simon & Nicky had this one:
	// findDuplicates: function (arr) {
	// 		 var duplicates = [];
	// 				 arr.forEach(function(number, index) {
	// 						 if (arr.indexOf(number, index + 1) > -1) {
	// 								 if (duplicates.indexOf(number) === -1) {
	// 										 duplicates.push(number);
	// 								 }
	// 						 }
	// 				 })
	// 		 return duplicates;
	//  },

	// Instructor Alex had:
	// finDuplicates: function (arr) {
	// 	var counts = {};
	// 	var newSolution = arr.filter(function(item) {
	// 	if(!counts[item]) {
	// 		counts[item] = 1
	// 	}else {
	// 		counts[item] += 1
	// 		if (counts[item] === 2) return true
	// 		}
	// 	})
	// return newSolution
	// };

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

	// Alternate solution:
	// findIndexesOf: function (arr, itemToFind) {
	// 	var results= []
	// 	arr.forEach(function (item, index){
	//  if (item === itemToFind) results.push(index);
	// })
	// return results;
	// }

	sumOfAllEvenNumbersSquared: function (arr) {
		var filteredNumbers = [];
		var numberFilter = function (number) {
			if(number % 2 === 0) filteredNumbers.push(number)
		}
		arr.filter(numberFilter);
		var square = function (runningTotal, currentNumber) {
			return runningTotal + (currentNumber * currentNumber);
		}
	return filteredNumbers.reduce(square, 0);
	}

	// Alternate Solution:
	// sumOfAllEvenNumbersSquared: function (arr) {
	// 	return arr.reduce(function (total, number) {
	// 		if (number % 2 === 0) {
	// 			return total + Math.pow(number, 2)
	// 		}
	// 		return total;
	// 	}, 0)
	// }

	// Dave S, implementing the re-use of previously written functions.
	// sumOfAllEvenNumbersSquared: function (arr) {
  // 	var evenNums = arr.filter(function(item) {
	// 		return (item % 2 === 0)
	// 	})
	// 	var result = arrayTasks.square(evenNums);
	// 	return arrayTasks.sum(result);
	// }

}

module.exports = arrayTasks
