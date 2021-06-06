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
var isValidBST = function(root) {
    return validateBst(root, -Infinity, Infinity)
};

function validateBst(root, minValue, maxValue) {
    if(root == null) 
        return true;
    if(root.val >= maxValue || root.val <= minValue) 
        return false;
    return validateBst(root.right, root.val, maxValue) &&
            validateBst(root.left, minValue, root.val)
}