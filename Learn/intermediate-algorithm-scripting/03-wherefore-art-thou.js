function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  // make an array of keys
  var keysToCheck = Object.keys(source);
  // filter the collection
  arr = collection.filter(function(item) {
    // check if every key in the item exist as property and have the good value
     return keysToCheck.every(function(key) {
       return item.hasOwnProperty(key) && item[key] === source[key];
     });
  });

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
