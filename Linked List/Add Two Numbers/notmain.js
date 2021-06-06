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
    let curv,tempans, inc = 0
    tempans = checkoverflow(l1, l2, inc)
    curv = tempans[0]
    inc = tempans[1]
    let head = new ListNode(curv, undefined)
    let curnode = head
    while(l1.next != null && l2.next != null){
        tempans = checkoverflow(l1.next, l2.next, inc)
        curv = tempans[0]
        inc = tempans[1]
        curnode.next = new ListNode(curv)
        curnode = curnode.next
        l1 = l1.next
        l2 = l2.next
    }
    if(l1.next == null){
        while(l2.next != null){
            tempans = checkoverflow2(l2.next, inc)
            curv = tempans[0]
            inc = tempans[1]
            curnode.next = new ListNode(curv)
            curnode = curnode.next
            l2 = l2.next
        } 
    }
    if(l2.next == null){
        while(l1.next != null){
            tempans = checkoverflow2(l1.next, inc)
            curv = tempans[0]
            inc = tempans[1]
            curnode.next = new ListNode(curv)
            curnode = curnode.next
            l1 = l1.next
        } 
    }
    if(!l1.next && !l2.next){
        if(inc == 0)
            return head
        else{
            curnode.next = new ListNode(1)
            return head
        }      
    }
    
};
    
var checkoverflow = function(node1,node2,one){
    let tempv = node1.val + node2.val + one
    let temp = 0
    if(tempv > 9){
        tempv =  tempv - 10
        temp = 1
    }
    return [tempv, temp]
}
var checkoverflow2 = function(node1,one){
    let tempv = node1.val + one
    let temp = 0
    console.log(node1.val)
    if(tempv > 9){
        tempv = tempv - 10
        temp = 1
    }
    return [tempv, temp]
}