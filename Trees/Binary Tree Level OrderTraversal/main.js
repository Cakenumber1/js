/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const ans = []
    if(!root) {
        return ans
    }
    const queue = [root]
    while (queue.length){
       const queueLength = queue.length
       const level = []
       for(let i = 0; i < queueLength; i++){
           const node = queue.shift()
           if(node.left){
               queue.push(node.left)
           }
           if(node.right){
               queue.push(node.right)
           }
           level.push(node.val)
       }
       ans.push(level)
   }
    return ans
}