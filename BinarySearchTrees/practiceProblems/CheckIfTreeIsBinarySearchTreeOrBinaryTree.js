// Examples
// Example 1:

// Input Format:

// Tree: 5 1 6 -1 -1 4 8

// Output: False, Not a BST

// Explanation:

// Node with value 4 is present in the right subtree of the root node with value 5. This violates the property of the binary search tree that the right subtree should only contain nodes with values greater than a node.

// Example 2:

// Input Format:

// Tree: 13 10 15 7 12 14 17 -1 9 -1 -1 -1 -1 16 -1 8 -1 -1 -1

// Output: True, the given tree is a BST.

// Explanation:

// All nodes are following the property of BST that for each node, all nodes in its left subtree have values smaller and all nodes in its right subtree have values greater than the current node’s value.

// Practice:
// Solve Problem
// code-studio
// Disclaimer: Don’t jump directly to the solution, try it out yourself first.

// Solution:
// Approach:
// In a Binary Search Tree (BST), every node holds a value, and the left subtree of a node contains values smaller than that node’s value, while the right subtree holds values greater than the node’s value. To ensure the entire tree follows this rule, we establish a range of valid values for each node.

// For any given node, its left subtree should contain values within a range from the smallest possible value up to just below the node’s value. Similarly, the right subtree’s values should fall within a range from just above the node’s value up to the largest possible value. This range checking ensures that at every step, each node’s value complies with the order established by a BST.

// Algorithm:
// Step 1: Start at the root of the binary tree and define a recursive function isValidBST that takes a node, along with its minimum and maximum allowed values as arguments.

// If the node is null, return true as that would be a valid BST.
// If the node’s value is outside the given range (smaller than the min value or greater than the max value), return false.
// Step 2: Call the isValidBST function starting from the root node with an initial range of minimum and maximum values that cover the full range of possible values (negative int min to positive int max). If the function returns true, the tree is a valid BST; otherwise, it’s not.

// Step 3: Recursively call isValidBST for each node by updating the maximum allowed value for the left subtree to be less than the current node’s value and updating the minimum allowed value for the right subtree to be more than the current node’s value.

// Definition of TreeNode structure
// for a binary tree node
class TreeNode {
  // Constructor to initialize the node with a
  // value and set left and right pointers to null
  constructor(x) {
    this.val = x;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  // Function to check if a given binary
  // tree is a valid binary search tree (BST)
  isValid(root) {
    // Calls the helper function isValidBST
    // with initial min and max values
    return this.isValidBST(
      root,
      Number.MIN_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER
    );
  }
  // Helper function to recursively validate the BST property
  isValidBST(root, minVal, maxVal) {
    if (root === null) {
      // Base case: an empty
      // tree is a valid BST
      return true;
    }

    // Checks if the current node
    // violates the BST property
    if (root.val <= minVal || root.val >= maxVal) {
      return false;
    }
    // Recursively checks left and right
    // subtrees with updated constraints
    // that every value on its left subtree
    // should be smaller than the current node
    // and every value on its right subtree
    // should be greater than the current node

    return (
      this.isValidBST(root.left, minVal, root.val) &&
      this.isValidBST(root.right, root.val, maxVal)
    );
  }
}

// Function to perform an in-order traversal
// of a binary tree and print its nodes
function printInOrder(root) {
  // Check if the current node
  // is null (base case for recursion)
  if (root === null) {
    // If null, return and
    // terminate the function
    return;
  }

  // Recursively call printInOrder
  // for the left subtree
  printInOrder(root.left);

  // Print the value of the current node
  console.log(root.val + " ");

  // Recursively call printInOrder
  // for the right subtree
  printInOrder(root.right);
}

// Creating a sample tree
let root = new TreeNode(6);
root.left = new TreeNode(3);
root.right = new TreeNode(8);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(7);
console.log("Inorder Traversal of Tree:");
printInOrder(root);

// Checking if the created tree is a valid BST
let solution = new Solution();
let isValidBST = solution.isValid(root);

if (isValidBST) {
  console.log("The tree is a valid BST.");
} else {
  console.log("The tree is not a valid BST.");
}

// The tree is a valid BST.

// Time Complexity: O(N) where N is the number of nodes in the binary tree. Since we are traversing and
// checking each node the time complexity is proportional to the number of does in the binary tree.

// Space Complexity: O(1) as no additional data structure or memory allocation
// is done during the traversal, though an O(N) is used as auxiliary space by the recursion stack.
