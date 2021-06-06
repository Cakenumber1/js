/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var entry_index = -1
        var left_border = 1
        var right_border = n
        var mid
        while(left_border <= right_border){
            mid = Math.floor((left_border + right_border) / 2)
            if (isBadVersion(mid)){
                entry_index = mid;
                right_border = mid - 1
            }
            else{
                left_border = mid + 1
            }
        }
        return entry_index
    };
};