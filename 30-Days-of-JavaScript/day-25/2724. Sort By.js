/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
const sortBy = (arr, fn) => Array.from(arr).sort((a, b) => fn(a) > fn(b) ? 1 : -1);
