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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root == null) return true;
    return isMirror(root.left, root.right);
};

const isMirror = function(leftSub, rightSub) {
    if (leftSub == null && rightSub == null) return true;
    if (leftSub == null || rightSub == null) return false;

    return (leftSub.val == rightSub.val 
            && isMirror(leftSub.left, rightSub.right) 
            && isMirror(leftSub.right, rightSub.left))
}