/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums_loc, k) {
//     k = k-1;
//     nums = nums_loc.slice(k).concat(nums_loc.slice(0,k))
// };
var rotate = function(nums, k) {
    k = k % nums.length
    for (var i = 0; i < k; i++) {
        nums.unshift(nums.pop())
    }
    
};