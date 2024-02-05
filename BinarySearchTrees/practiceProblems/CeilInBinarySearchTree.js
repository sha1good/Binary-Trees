// Problem Statement: Given a BST and a number X, find the Ceil of X.
// Note: Ceil(X) is a number that is either equal to X or is immediately greater than X.

// If Ceil cannot be found, return -1.

// Solution:
// Approach:
// This Problem can be easily solved by using a similar approach as we use to Binary Search a linear array and find the number that is just greater or equal to the given target input value.

// Algorithm:
// We start from the root element and check whether the number whose ceil we have to find out is equal to the value of the root or not. If its value is equal, we simply return the number.
// Now, if the value of the number is not equal to the root’s value but is greater, we can conclude by saying that the number’s ceil value also lies in the right subtree of the given BST because, in BST, the right subtree contains all the elements whose values are greater than the root element.
// If the value of the number, however, is lesser than the root’s value, then a possible ceil value could be the root itself as the number is less than its value. So, to check whether the number can be reduced further, we move to the left subtree and keep on updating the ceiling value accordingly.
// Once, we encounter any node whose value is null, we return the computed ceil value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function findCeil(root, key) {
  let ceil = -1;

  while (root !== null) {
    // If input is found in the tree, return it as ceil.
    if (root.data === key) {
      ceil = root.data;
      return ceil;
    }
    // Move to the right subtree if input is greater than current node's data.
    else if (root.data < key) {
      root = root.right;
    } else {
      // Mark ceil to be current node's data.
      // Move to the left subtree to find a closer ceil value.
      ceil = root.data;
      root = root.left;
    }
  }
  return ceil;
}

// Driver Code
let root = new Node(10);
root.left = new Node(5);
root.left.left = new Node(4);
root.left.right = new Node(7);
root.left.right.right = new Node(8);
root.right = new Node(11);

console.log(findCeil(root, 6)); // Find and print the ceil of 6 in the BST.


// Time Complexity: O(log(N)) {Similar to Binary Search, 
// at a given time we’re searching one half of the tree, 
// so the time taken would be of the order log(N) 
// where N are the total nodes in the BST and log(N) is the height of the tree.}

// Space Complexity: O(1) {As no extra space is being used, 
// we’re just traversing the BST.}
