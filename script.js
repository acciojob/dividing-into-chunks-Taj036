const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
	
  // Write your code here
	let sumtrack=0 , arr2=[] , subarr=[] ;
	for(let i  = 0 ; i < arr.length ; i++){
		
		if(sumtrack += arr[i] <= n){
			subarr.push(arr[i]);
			sumtrack+= arr[i];
		}else{
			arr2.push(subarr);
			subarr=[];
			 sumtrack = 0;
		}
	}
	if (subarr.length > 0) {
    arr1.push(subarr);
}
	  return arr ;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
