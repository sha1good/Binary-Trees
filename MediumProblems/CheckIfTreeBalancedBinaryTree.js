// Solution 2: Post Order Traversal

// Intuition: Can we optimize the above brute force solution? Which operation do you think can be skipped to optimize the time complexity?

// Ain’t we traversing the subtrees again and again in the above example?

// Yes, so can we skip the repeated traversals?

// What if we can make use of post-order traversal?

// So, the idea is to use post-order traversal. Since, in postorder traversal, we first traverse the left and right subtrees and then visit the parent node, similarly instead of calculating the height of the left subtree and right subtree every time at the root node, use post-order traversal, and keep calculating the heights of the left and right subtrees and perform the validation.

// Approach :

// Start traversing the tree recursively and do work in Post Order.
// For each call, caculate the height of the root node, and return it to previous calls.
// Simultaneously, in the Post Order of every node , Check for condition of balance as information of left and right subtree height is available.
// If it is balanced , simply return height of current node and if not then return -1.
// Whenever the subtree result is -1 , simply keep on returning -1.
// Dry Run :

// In Post Order, Start traversing the tree on the example given in below diagram

// Reach on Node 0, Left child = null so 0 Height , Right child = null so 0 Height , Difference is 0-0 = 0 , ( 0 <= 1 ) so return height , i.e. Max(0,0) + 1 = 1.
// Reach on Node 2 , Left subtree height = 1 , Right subtree height =  0, Difference is 1-0 = 1 , ( 1 <= 1 ) so return height , i.e. Max(1,0) + 1 = 2.
// Reach on Node 11 , Left child = null so 0 Height , Right child = null so 0 Height , Difference is 0-0 = 0 , ( 0 <= 1 ) so return height , i.e. Max(0,0) + 1 = 1.
// Reach on Node 7 , Left subtree height = 2 , Right subtree height =  1, Difference is 2-1 = 1 , ( 1 <= 1 ) so return height , i.e. Max(2,1) + 1 = 3.
// Reach on Node 5 , Left child = null so 0 Height , Right child = null so 0 Height , Difference is 0-0 = 0 , ( 0 <= 1 ) so return height , i.e. Max(0,0) + 1 = 1.
// Reach on Node 3 , Left subtree height = 1 , Right subtree height =  0, Difference is 1-0 = 1 , ( 1 <= 1 ) so return height , i.e. Max(1,0) + 1 = 2.
// Reach on Node 1 , Left subtree height = 2 , Right subtree height =  0, Difference is 2-0 = 2 , ( 2 > 1 ) i.e. Tree is not Balanced , so return -1.
// Reach on Node 8 , Left subtree height = -1  , indicates that tree is not balanced, simply return -1;
// Reach on Node 4 , Left subtree height = 3 , Right subtree height =  -1, therefore indicates that tree is not balanced , simply return -1;
// In the Main function , If the final Height of tree is -1 return false as tree is not balanced , else return true.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  isBalanced(root) {
    return this.dfsHeight(root) !== -1;
  }

  dfsHeight(node) {
    if (node === null) return 0;

    let leftNode = this.dfsHeight(node.left);
    if (leftNode === -1) return -1;
    let rightNode = this.dfsHeight(node.right);
    if (rightNode === -1) return -1;

    if (Math.abs(leftNode - rightNode) > 1) return -1;
    return 1 + Math.max(leftNode, rightNode);
  }
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const obj = new Solution();
const result = obj.isBalanced(root);
console.log(result);

// Time Complexity: O(N) 

// Space Complexity: O(1) Extra Space + 
// O(H) Recursion Stack space (Where “H”  is the height of binary tree)
