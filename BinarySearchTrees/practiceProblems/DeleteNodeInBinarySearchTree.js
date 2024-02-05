// // Given a root node reference of a BST and a key,
// // delete the node with the given key in the BST.
// // Return the root node reference (possibly updated) of the BST.

// // Basically, the deletion can be divided into two stages:

// // Search for a node to remove.
// // If the node is found, delete the node.

// // Input: root = [5,3,6,2,4,null,7], key = 3
// // Output: [5,4,6,2,null,null,7]
// // Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
// // One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
// // Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

// Solution:
// Approach:
// To delete a node in a Binary Search Tree, start from the root and navigate to the node to delete based on its key. If the node is found, handle deletion based on three cases: if the node has no children, remove it; if it has one child, replace it with its child; if it has two children, find its inorder predecessor (the largest node in the left subtree), attach its right child to its parent, and connect the left child of the node to its parent’s new child. Return the modified BST after deletion.

// Algorithm:
// Step 1: Search for the node to delete:

// Start from the root and if the key is less than the current node, move to the left subtree and if the key is greater than the current node, move to the right subtree. Repeat this until we find the node to delete or reach a null node.

// Step 2: Handle Different Cases for Deletion:

// Case 1: If the node has no children (leaf nodes), simply remove the node.
// Case 2: If the node has one child, replace the node to be deleted with its child.
// Case 3: If the node has two children,

// Find the node’s inorder predecessor by traversing the left subtree of the node to find the rightmost (largest) node. Store this as lastRight.
// Set the right child lastRight’s to the node to be deleted.
// Skip over the node to be deleted by directly connecting the root to the node’s left child ie. the root of the left subtree.

// Step 3: Return the modified Binary Search Tree.

// Definition of TreeNode structure
// for a binary tree node
class TreeNode {
  // Value of the node
  constructor(val) {
    this.val = val;
    // Pointer to the left child node
    this.left = null;
    // Pointer to the right child node
    this.right = null;
  }
}

class Solution {
  deleteNode(root, keyToDelete) {
    // Check if the root is empty
    if (root === null) {
      // Return null if the root is empty
      return null;
    }

    // If the current root node has
    // the key to be deleted
    if (root.val === keyToDelete) {
      // Delete the node using
      // the helper function
      return this.helper(root);
    }
    // Create a dummy node pointing to the root
    let dummyRoot = root;
    // While loop to traverse the tree
    while (root !== null) {
      // If the left child exists and
      // its value matches the key
      if (dummyRoot.val > keyToDelete) {
        if (dummyRoot.left !== null && dummyRoot.left.val === keyToDelete) {
          // Delete the node using the helper function
          dummyRoot.left = this.helper(dummyRoot.left);
          break;
        } else {
          // Move to the left subtree
          dummyRoot = dummyRoot.left;
        }
      } else {
        // If the left child exists and
        // its value matches the key
        if (dummyRoot.right !== null && dummyRoot.right.val === keyToDelete) {
          // Delete the node using the helper function
          dummyRoot.right = this.helper(dummyRoot.right);
          break;
        } else {
          // Move to the left subtree
          dummyRoot = dummyRoot.right;
        }
      }
    }
    return dummyRoot;
  }

  // Helper function to delete the node
  helper(root) {
    // If the left child of the root is null,
    // return the left child
    if (root.right == null) {
      return root.left;
    } else if (root.left === null) {
      // If the right child is null,
      // return the left child
      return root.right;
    }
    // If both left and right children exist
    // Store the right child
    let rightChild = root.right;
    // Find the last right child of the left subtree
    let lastChild = this.findLastRight(root.left);
    // Set the right child of the last
    // right node to the stored right child
    lastChild.right = rightChild;
    // Return the left child as the new subtree
    return root.left;
  }

  findLastRight(root) {
    if (root.right === null) {
      return root;
    }
    return this.findLastRight(root.right);
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

// Creating a sample tree for testing purposes
let root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(7);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(8);

// Printing the original tree
console.log("Original Tree (Inorder Traversal): ");
printInOrder(root);
console.log("");

// Testing the deleteNode function
let solution = new Solution();
let keyToDelete = 3;
let updatedTree = solution.deleteNode(root, keyToDelete);

// Printing the tree after deletion
console.log("Tree After Deletion (Inorder Traversal): ");
printInOrder(updatedTree);
console.log("");

// Time Complexity: O(H) where H is the height of the tree. This is due to the binary search applied while finding the node with value as key. All other operations performed are in constant time. O(H) ~ O(log N) in case of a full binary search tree (optimal time).

// Space Complexity: O(1) as no additional data structures or memory allocation is done
