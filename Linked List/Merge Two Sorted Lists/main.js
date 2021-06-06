/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(l1 == null)
        return l2
    if(l2 == null)
        return l1
    let ans
    let temp
    let temp2
    let st
    if(l1.val <= l2.val){
        temp = l1
        temp2 = l2
        ans = l1
    }
    else{
        temp = l2
        temp2 = l1
        ans = l2
    }
    while(temp.next != null){
        if(temp.val <= temp2.val){
            if(temp.next.val <= temp2.val){
                temp = temp.next
            }
            else{
            st = temp.next
            temp.next = temp2
            temp = temp.next
            temp2 = st
            }
        }
    }
    if(temp2 != null)
        temp.next = temp2
    return ans
    
};