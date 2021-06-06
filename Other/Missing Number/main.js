/**
 * @param {number[]} nums
 * @return {number}
 */

// var missingNumber = function(nums) {
//     var missing = nums.length;
//         for (var i = 0; i < nums.length; i++) {
//             missing ^= i ^ nums[i];
//         }
//     return missing;
// };

var missingNumber = function(nums) { 
    nums = nums.sort(function(a, b) {
  return a - b})
    for(i = 0; i < nums.length;i++)
        if(nums[i] != i) return i
    return nums.length
};