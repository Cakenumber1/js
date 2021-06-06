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

var addTwoNumbers = function(l1, l2) {
    let emptynode = new ListNode(1);
    let curnode = emptynode;
    let inc = 0;
    while(l1 != null || l2 != null){
        let a = (l1 != null) ? l1.val : 0;
        let b = (l2 != null) ? l2.val : 0;
        var temp = a + b+ inc;
        inc = 0;
        (temp - 10 >= 0) ? inc = 1 : null;
        curnode.next = new ListNode(temp % 10);
        curnode = curnode.next;
        (l1 != null) ? l1 = l1.next : null;
        (l2 != null) ? l2 = l2.next : null;
    }
    (inc == 1) ? curnode.next = new ListNode(1) : null;
    return emptynode.next    
};