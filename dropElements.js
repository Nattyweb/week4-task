// A function that takes two argument, an array arr
// and a number n.The function return a new aray of 
// numbers greater than or equal to n.

function dropElement(arr, n) {
	let newArr = arr.filter(element => element >= n);
	console.log(newArr);
}

dropElement([1,3,4,6,8,10], 4)
dropElement([5,7,9], 3)
dropElement([1,2,3,4], 5)
