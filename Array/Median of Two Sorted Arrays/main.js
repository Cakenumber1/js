/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2){
    let l1 = nums1.length, l2 = nums2.length
    let i = 0, j = 0
    let n1 = -1, n2 = -1
    let c;

    if ((l1 + l2) % 2 == 1)
    {
        for(c = 0;c <= (l1 + l2) / 2;c++)
        {
            if (i != l1 && j != l2)
                n1 = (nums1[i] > nums2[j]) ? nums2[j++] : nums1[i++]
            else if(i < l1)
                n1 = nums1[i++]
            else
                n1 = nums2[j++]
        }
        return n1;
    }
    else
    {
        for(c = 0;c <= (l1 + l2) / 2;c++)
        {
            n2 = n1
            if (i != l1 && j != l2)
                n1 = (nums1[i] > nums2[j]) ? nums2[j++] : nums1[i++]
            else if(i < l1)
                n1 = nums1[i++]
            else
                n1 = nums2[j++]
        }
        return (n1 + n2) / 2
    }
}