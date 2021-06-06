/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums2, target) {
    var nums = nums2.slice()
    nums = nums.sort((a, b) => a - b);
    var temp = nums.find( currentValue => currentValue > target )
    //var end = (nums.indexOf(temp) == -1) ? nums2.length -1 : nums.indexOf(temp) -1
    var start = 0;
    var middle
    var left = 0
    for(var j = nums.length -1 ; j >= 1; j--){
        start = left
        end = j
        while (start <= end) {
            if(middle == -1)
                break
            middle = Math.round((start + end) / 2);
            if (nums[middle] + nums[j] ==  target) {
                return [nums2.indexOf(nums[middle]) ,nums2.lastIndexOf(nums[j])];
            } else if (nums[middle] + nums[j] < target) {
                left = start
                start = middle + 1;
            } else {
            end = middle - 1;
            }
        }
    }
}