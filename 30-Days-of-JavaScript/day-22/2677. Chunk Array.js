/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    return arr.reduce((acc, cur, index) => {
        if (index % size === 0) {
            acc.push([cur]);
        } else {
            acc.at(-1).push(cur);
        }
        return acc;
    }, []);
};
