function diffArray(arr1, arr2) {
  var newArr = [];
  
  newArr = arr1.concat(arr2); 
  
  function checkNum(num) {
    if (arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) {
      return num;
    }
  }
  
  return newArr.filter(checkNum);
  
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
