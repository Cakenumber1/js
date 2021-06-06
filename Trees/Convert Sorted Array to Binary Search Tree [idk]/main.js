/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
//TreeNode не работает конструктор
var sortedArrayToBST = function (nums) {
    let tree
    let mid = 1
    let val
    while (mid > 0) {
        mid = Math.floor(nums.length / 2)
        val = nums[mid]
        nums.splice(mid, 1)
        add(val, tree)
    }


};

var add = function (value, treeNode1) {
    //create a new item object, place data in
    var node = TreeNode(value)
    console.log(node)

    //special case: no items in the tree yet
    if (!treeNode1) {
        treeNode1 = node;
    } else {
        let current = treeNode1;

        while (true) {

            //if the new value is less than this node's value, go left
            if (value < current.val) {

                //if there's no left, then the new node belongs there
                if (current.left == null) {
                    current.left = node;
                    break;
                } else {
                    current = current.left;
                }

                //if the new value is greater than this node's value, go right
            } else if (value > current.val) {

                //if there's no right, then the new node belongs there
                if (current.right == null) {
                    current.right = node;
                    break;
                } else {
                    current = current.right;
                }

            } else {
                break;
            }
        }
    }
};
