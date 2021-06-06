/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    l_orig = nums.length
    nums = nums.filter(i => (i != 0))
    l = l_orig - nums.length
    return nums.concat(new Array(l).fill(0))
    // не инплейс
};

var moveZeroes = function(nums) {
    var k = 0
    for (var i = 0; i < nums.length; i++) {
        if (nums[k] == 0){
            nums.splice(k,1)
            nums.push(0)
        }
        else k++
    }
    return nums
};