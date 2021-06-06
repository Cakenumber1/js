/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m)
    nums2.splice(n)
    nums1 = nums1.concat(nums2)
    //nums1 = mergeSort(nums1)
    return mergeSort(nums1)
};

function mergef(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    return [ ...arr, ...left, ...right ]
}
function mergeSort(array) {
  const half = array.length / 2
  
  if(array.length < 2){
    return array 
  }
  const left = array.splice(0, half)
  return mergef(mergeSort(left),mergeSort(array))
}