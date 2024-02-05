// Solution:
// Intuition:
// We are given a binary search tree. In a binary search tree, for every node the following property is satisfied:

// Values in the left subtree < Value of node < Values in the right subtree

// Therefore, whenever we are at a node, if its value is equal to the value we are searching for,(say target),  we have found our answer and we can return the node address. Else, we can compare the target value to the node’s value. If the target value is less than it we will find our answer in the left subtree else we will find it in the right subtree. At every step, we decrease our search space by half, which is nothing else than binary search.

// Approach:
// The algorithm steps can be stated as:

// Set a while loop which runs till the time root is not NULL and root’s value is not equal to the target value we are searching for.
// Inside the while loop, if the target value is less than the root’s value, move root to its left child, else move root to its right child.
// When the while loop ends, return root as the answer.
// Dry Run:

// # When the target value is present inside the tree

// (i) First we set the while loop to run.

// (ii) As the target is greater than the root’s value(8), we assign the root its right child.

// (iii) As the target’s value is lesser than the root’s value(12), we assign the root to its right child.

// (iv) As the target’s value is equal to the current root’s vale, we break from the while loop and return this root’s address as our answer.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function searchBST(root, data) {
  while (root !== null && root.data !== data) {
    root = data < root.data ? root.left : root.right;
  }

  return root;
}

function newNode(root) {
  let node = new Node(root);
  return node;
}

// Main program
const root = newNode(8);
root.left = newNode(5);
root.left.left = newNode(4);
root.left.right = newNode(7);
root.left.right.left = newNode(6);
root.right = newNode(12);
root.right.left = newNode(10);
root.right.right = newNode(14);
root.right.right.left = newNode(13);

const found = searchBST(root, 10);

if (found !== null) {
  console.log("Node value with given target found");
} else {
  console.log("Node value with given target is NOT found");
}


// Node value with given target found

// Time Complexity: O(logN)

// Reason: The time required will be proportional to the height of the tree, if the tree is balanced, then the height of the tree is logN.

// Space Complexity: O(1)

// Reason: We are not using any extra space.