//Insertion Sort!
//We start with the first element then we compare the current value with the previous values and we insert in the correct place

function insertionSort(arr){
	for(let i= 1; i < arr.length ; i++){
		var val = arr[i];
		//we have to condition in order to go inside the loop
		for(var j=i-1; j >= 0 && val < arr[j]; j--){
			arr[j+1] = arr[j]
		}
		arr[j + 1] = val;
	}
}

var arr = [5,7,2,1,9]
var a2 = [4,2,1]
insertionSort(arr);
console.log(arr)
insertionSort(a2);
console.log(a2)
