/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
  const groups = new Map();
  for (let item of this) {
    const groupKey = fn(item);
    if (!groups.has(groupKey)) {
      groups.set(groupKey, [item]);
    } else {
      groups.get(groupKey).push(item);
    }
  }
  return Object.fromEntries(groups.entries());
};


/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
