// // Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

// // According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

 

// // Example 1:


// // Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// // Output: 6
// // Explanation: The LCA of nodes 2 and 8 is 6.
// // Example 2:


// // Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// // Output: 2
// // Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
// // Example 3:

// // Input: root = [2,1], p = 2, q = 1
// // Output: 2
 

// // Constraints:

// // The number of nodes in the tree is in the range [2, 105].
// // -109 <= Node.val <= 109
// // All Node.val are unique.
// // p != q
// // p and q will exist in the BST.

// Approach: 
// In a Binary Search Tree (BST), finding the Lowest Common Ancestor (LCA) involves traversing the tree from the root while comparing the values of the two nodes with the current node. At each step, if both nodes are smaller, move left; if larger, move right. When they diverge (one left, one right, or one is the current node), that node is the LCA.

// This approach leverages the BST’s structure, efficiently narrowing down the search space based on node values.

// Algorithm:
// Step 1: Start at the root of the Binary Search Tree. 

// Step 2: Compare the values of the two nodes with the value of the current node.

// If both nodes are smaller than the current node, they are both to its left hence move to its left child.
// If both nodes are larger than the current node, they are both to its right hence move to its right child.
// If one node is to the left and the other to the right of the current node, or if one node is the current node itself, then the current node is the LCA.
// Step 3: Traverse down the tree based on the comparison of the node values, narrow done the search space by eliminating subtrees where the LCA cannot exist.

// Definition of TreeNode structure
// for a binary tree node
class TreeNode {
    constructor(x) {
      this.val = x;
      this.left = null;
      this.right = null;
    }
  }
  
  class Solution {
    // Function to find the lowest common ancestor (LCA)
    // of two nodes in a binary search tree (BST)
    lowestCommonAncestor(root, p, q) {
      // Check if the root is null
      if (root === null) {
        // If null, return null as there's no LCA
        return null;
      }
  
      // Store the value of the current root node
      const curr = root.val;
  
      // If both p and q values are greater
      // than the current root's value
      if (curr < p.val && curr < q.val) {
        // Recursively search in the
        // right subtree for the LCA
        return this.lowestCommonAncestor(root.right, p, q);
      }
  
      // If both p and q values are smaller
      // than the current root's value
      if (curr > p.val && curr > q.val) {
        // Recursively search in the
        // left subtree for the LCA
        return this.lowestCommonAncestor(root.left, p, q);
      }
  
      // If the values are on either side of the current root's value,
      // or one of the values matches the current root's value,
      // return the current root as the LCA
      return root;
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
    console.log(root.val + ' ');
  
    // Recursively call printInOrder
    // for the right subtree
    printInOrder(root.right);
  }
  
  // Example usage
  const solution = new Solution();
  
  // Creating a sample tree
  const root = new TreeNode(6);
  root.left = new TreeNode(3);
  root.right = new TreeNode(8);
  root.left.left = new TreeNode(2);
  root.left.right = new TreeNode(4);
  root.right.left = new TreeNode(7);
  
  console.log("Inorder Traversal of Tree:");
  printInOrder(root);
  console.log('');
  
  // Node with value 2
  const p = root.left.left;
  
  // Node with value 4
  const q = root.left.right;
  
  const lca = solution.lowestCommonAncestor(root, p, q);
  
  console.log("Lowest Common Ancestor of " + p.val + " and " + q.val + " is: " + lca.val);
  