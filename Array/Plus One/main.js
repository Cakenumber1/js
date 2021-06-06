/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var tail = digits.length - 1
    digits[tail] +=1
    while(digits[tail]>9){
        digits[tail] = digits[tail]%10
        if(tail == 0){
            digits.unshift(1);
            tail--
        }
        else
            {
                tail--
                digits[tail]++
            }
    }
    return digits  
};