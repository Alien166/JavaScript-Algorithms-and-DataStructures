function truthCheck(collection, pre) {
  return collection.every(function(e) { return e[pre]; });
}
