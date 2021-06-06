/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x > 2**31 -1 || x < -1*(2**31))
        return 0
    var ans = 0
    var k = (x > 0) ? x.toString().split('',).length - 1 : x.toString().split('',).length - 2
    while(x !== 0){
        var q = x % 10
        x = Math.trunc(x / 10)
        ans += q *(10**k)
        k--
    }
    if (ans > 2**31 -1 || ans < -1*(2**31))
        //я не нашел 32 битного инта в js
        return 0
    return ans
};