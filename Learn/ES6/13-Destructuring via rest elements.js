function removeFirstTwo(list) {
  // Only change code below this line
  const [a,b,...shorterList] = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5];
const sourceWithoutFirstTwo = removeFirstTwo(source);
