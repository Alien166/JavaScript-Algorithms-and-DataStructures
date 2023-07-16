function destroyer(arr) {
  var check = [];

  for (var i = 1; i < arguments.length; i++) {
    check.push(arguments[i]);
  }

  var itemsNotDestroy = arguments[0].filter(function(item) {
    var itemPass = true;
    for (var i = 0; i < check.length; i++) {
      if (item === check[i]) {
        itemPass = false;
      }
    }
    return itemPass;
  });

  return itemsNotDestroy;
}

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
