//Selection Sort:
//Professor Thej
function selectionSort(arr){
	for(var i = 0; i < arr.length; i++){
		var minIndex = i;
		for(var j = i + 1; j < arr.length; j++){
			if(arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		if(minIndex != i){
			var temp = arr[minIndex];
			arr[minIndex] = arr[i];
			arr[i] = temp;
		}
	}
}

var arr = [3,8,1,9,4];

selectionSort(arr)
console.log(arr)
