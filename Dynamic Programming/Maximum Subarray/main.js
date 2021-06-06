/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    const allNeg = nums => nums.every(n=> n < 0)
    var temp = 0
    var ans = 0
    if(allNeg(nums)){
        ans = -Infinity
        for(let i = 0; i < nums.length; i++){
            
            temp = nums[i]
            if(temp > ans)
                ans = temp   
        }
    }
    else{
        for(let i = 0; i < nums.length; i++){
            temp += nums[i]
        
            if(temp > ans)
                ans = temp
        
            if(temp < 0){
                temp = 0
            }
        }  
    }
    return ans
};