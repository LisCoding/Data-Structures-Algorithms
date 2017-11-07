
//We are passing arr  as reference we do not need a return statement
//and we modifying
function bubbleSort(arr){
	var sorted = false;
	while(!sorted){
		sorted = true;
		for(let i = 0; i < arr.length; i++){
			if(arr[i]> arr[i+1]){
				var temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
				sorted = false;
			}
		}
	}
	return arr;
}

var arr = [4,9,1,6,3]
console.log(bubbleSort(arr))
console.log(arr)

//USING TWO LOOPS
function bubbleSortII(arr){

		for(let i = 0; i < arr.length; i++){
			for( let j = 0; j < arr.length; j++){
				if(arr[i]> arr[i+1]){
				var temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
				}
			}
		}
}

console.log(bubbleSortII(arr))
console.log("using two for loops")
console.log(arr)
