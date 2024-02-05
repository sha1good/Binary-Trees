// Problem Statement: Find the Diameter of a Binary Tree. Diameter is the length of the longest path between any 2 nodes in the tree and this path may or may not pass from the root.

// Example 1:

// Input Format: Given the root of Binary Tree

// Diameter of a Binary Tree
// Result: 4

// Explanation: Longest Path available is 7 – 4 – 8 – 1 – 3 of length 4

// Example 2:

// Input Format:  Given the root of Binary Tree

// Result: 6

// Explanation:  Longest Path available is 5 – 3 – 1 – 8 – 0 – 2 – 0 of length 6. ( Path is not Passing from root ).

// Solution 2: Post Order Traversal

// Intuition :

// Is it possible to optimize the above solution further? Which operation do you think is very repetitive in nature in the above solution?

// 💡 Height of the subtrees.

// Can we use postorder traversal to calculate everything in a single traversal of the tree?

// Yes, as in post-order traversal, we have to completely traverse the left and right subtree before visiting the root node.

// So, the idea is to use post-order traversal and keep calculating the height of the left and right subtrees. Once we have the heights at the current node, we can easily calculate both the diameter and height of the current node.

// Approach :

// Start traversing the tree recursively and do work in Post Order.
// In the Post Order of every node , calculate diameter and height of the current node.
// If current diameter is maximum then update the variable used to store the maximum diameter.
// Return height of current node to the previous recursive call.
// Dry Run :

// In Post Order, Start traversing the tree:

// Reach on Node 6 , Left height = 0 as left == null , Right height = 0 as right == null so Diameter is (0 + 0) = 0. Hence , Maximum Diameter = Max( 0 , 0) = 0 and return height = max(0,0)+1 = 1.
// Reach on Node 0, Left height = 1 , Right height = 0 as right == null so Diameter is (1 + 0) = 1. Hence , Maximum Diameter = Max( 0 , 1) = 1 and return height = max(1,0)+1 = 2.
// Reach on Node 9 , Left height = 0 as left == null , Right height = 0 as right == null so Diameter is (0 + 0) = 0. Hence , Maximum Diameter = Max( 1 , 0) = 1 and return height = max(0,0)+1 = 1.
// Reach on Node 4 , Left height = 0 as left == null , Right height = 1 , so Diameter is (0 + 1) = 1. Hence , Maximum Diameter = Max( 1 , 1) = 1 and return height = max(0,1)+1 = 2.
// Reach on Node 14 , Left height = 2 , Right height = 2 , so Diameter is (2 + 2) = 4. Hence , Maximum Diameter = Max( 1 , 4) = 4 and return height = max(2,2)+1 = 3.
// Reach on Node 3 , Left height = 3 , Right height = 0 as right == null , so Diameter is (3 + 0) = 3. Hence , Maximum Diameter = Max( 4 , 3) = 4 and return height = max(3,0)+1 = 4.
// Hence , the maximum diameter is 4 .

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  diameterOfBinaryTree(root) {
    let diameter = { value: 1 };
    this.height(root, diameter);
    return diameter.value;
  }

  height(node, diameter) {
    if (!node) {
      return 0;
    }

    let lh = this.height(node.left, diameter);
    let rh = this.height(node.right, diameter);

    diameter.value = Math.max(diameter.value, lh + rh);

    return 1 + Math.max(lh, rh);
  }
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const obj = new Solution();
const result = obj.diameterOfBinaryTree(root);
console.log(result);

// Time Complexity: O(N) 

// Space Complexity: O(1) Extra Space + O(H) 
// Recursion Stack space (Where “H”  is the height of binary tree )  