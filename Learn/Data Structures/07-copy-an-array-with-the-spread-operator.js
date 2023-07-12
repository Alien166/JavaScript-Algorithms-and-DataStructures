function copyMachine(arr,num){
	let newArr=[];
	while(num >=1){
	newArr.push([...arr]);
	num--;
	}
	return newArr;
}
console.log(copyMachine([true, false, true], 2));
