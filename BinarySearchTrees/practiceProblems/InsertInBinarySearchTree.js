// You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

// Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

// Example 1:

// Input: root = [4,2,7,1,3], val = 5
// Output: [4,2,7,1,3,5]
// Explanation: Another accepted tree is:

// Example 2:

// Input: root = [40,20,60,10,30,50,70], val = 25
// Output: [40,20,60,10,30,50,70,null,null,25]
// Example 3:

// Input: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
// Output: [4,2,7,1,3,5]

// Constraints:

// The number of nodes in the tree will be in the range [0, 104].
// -108 <= Node.val <= 108
// All the values Node.val are unique.
// -108 <= val <= 108
// It's guaranteed that val does not exist in the original BST.

// Approach:
// Algorithm:
// Step 1: Traverse the tree to Determine the Insertion Point

// Compare the value to be inserted with the current node’s value.
//If the value is less than the current node’s value, move to the left subtree.
//If the value is greater than the current node’s value, move to the right subtree.
//Repeat this process until finding a potential leaf (a null child) in the appropriate subtree.

// Step 2: Insert a new node with the given value

// Create a new node with the given value. Attach this new node as a child to the parent node at the empty spot found in the previous step. If the value is less than the parent’s node value, attach as the left child; otherwise, attach as the right child.

// Step 3: Return the modified Binary Search Tree.

// Definition of TreeNode structure
// for a binary tree node
class TreeNode {
  // Constructor to initialize
  // the node with a value
  constructor(x) {
    this.val = x;
    // Pointer to the left child node
    this.left = null;
    // Pointer to the right child node
    this.right = null;
  }
}

class Solution {
  insertIntoBST(root, keyToInsert) {
    // If the root node is null, create a new node
    // with the given value and return it as the new root.
    if (root === null) {
      return new TreeNode(keyToInsert);
    }

    // cur pointer to traverse the tree
    let currentNode = root;
    // While loop to traverse the tree to find
    // the appropriate position for insertion.
    while (true) {
      // If the current node's value is less than
      // or equal to the value to be inserted,
      // move to the right subtree.
      if (currentNode.val <= keyToInsert) {
        // If the right child of the current node
        // is not null, update 'cur' to the right child.
        if (currentNode.right !== null) {
          currentNode = currentNode.right;
        }
        // If the right child is null, create a
        // new node with the given value as the
        // right child and exit the loop.
        else {
          currentNode.right = new TreeNode(keyToInsert);
          break;
        }
      }
      // If the current node's value is greater than the
      // value to be inserted, move to the left subtree.
      else {
        // If the left child of the current node is not
        // null, update 'cur' to the left child.
        if (currentNode.left !== null) {
          currentNode = currentNode.left;
        } else {
          // If the left child is null, create a
          // new node with the given value as the
          // left child and exit the loop.
          currentNode.left = new TreeNode(keyToInsert);
          break;
        }
      }
    }

    // Return the root of the
    // modified tree after insertion.
    return root;
  }
}

// Function to perform an in-order traversal
// of a binary tree and print its nodes
function printInOrder(root) {
  // Check if the current node is null
  // (base case for recursion)
  if (root == null) {
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

// Printing the original tree
console.log("Original Tree (Inorder Traversal): ");
printInOrder(root);
console.log("\n");

let keyToInsert = 5;
let solution = new Solution();

let updatedTree = solution.insertIntoBST(root, keyToInsert);
console.log("Tree After Insertion (Inorder Traversal): ");

printInOrder(updatedTree);
console.log("\n");

// Original Tree (Inorder Traversal): 2 3 4 6 7 8

// Tree After Insertion (Inorder Traversal): 2 3 4 5 6 7 8

// Time Complexity: O(log N) because of the logarithmic
// height of the Binary Search Tree that is traversed during the insertion process.

// Space Complexity: O(1) as no additional data structures or memory allocation is done
