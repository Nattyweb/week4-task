// A function that takes two argument, an array arr
// and a number n.The function return a new aray of 
// numbers greater than or equal to n.

function dropElement(arr, n) {
	let newArr = arr.filter(element => element >= n);
	return newArr;
}

console.log(dropElement([1,3,4,6,8,10], 4))
console.log(dropElement([5,7,9], 3))
console.log(dropElement([1,2,3,4], 5))
