/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head == null || head.next == null ){
        return head
    }
    let prev = head
    let cur = prev.next
    let temp = cur.next
    prev.next = null
    while(temp != null){
        cur.next = prev
        prev = cur
        cur = temp
        temp = cur.next
    }
    cur.next= prev
    return cur
};