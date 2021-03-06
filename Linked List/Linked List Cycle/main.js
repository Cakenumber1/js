/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head == null)
        return false
    while(head.next != null){
        if(head.c == true){
            return true
        }
        else{
            head.c = true
            head = head.next
        }
    }
    return false
};