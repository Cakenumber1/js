/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    cur = head
    el = head
    for(var i = 0; i < n; i++){
        el = el.next
    }
    if(el != null){
        while(el.next != null){
        cur = cur.next
        el=el.next
        }
        cur.next = cur.next.next
        return head
        }
    return head.next
};