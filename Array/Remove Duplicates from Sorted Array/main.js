/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (var i = 1; i < nums.length; i++) {
        for (var j = i-1; j >=0; j--){
            if(nums[i] == nums[j]){
                nums.splice(i,1)
                i = i -1
                break
            }
        }
    }
    return nums.length
};