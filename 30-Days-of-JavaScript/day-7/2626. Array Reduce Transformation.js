/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    value=init;
    for(const i of nums) {
        value =fn(value , i);
    }
    return value;
    
};
