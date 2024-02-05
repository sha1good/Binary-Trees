// // Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// // Example 1:

// // Input: root = [3,1,4,null,2], k = 1
// // Output: 1
// // Example 2:

// // Input: root = [5,3,6,2,4,null,null,1], k = 3
// // Output: 3

// // Constraints:

// // The number of nodes in the tree is n.

// Approach:

// Here first, we take the input array and we insert all elements of the array into a BST.

// And after that, we take a variable K.

// Then I have to find the Kth largest and smallest element in BST.

// So, I created two functions one is kthlargest and the other is kthsmallest.

// The first function gives us the Kth largest element of that BST and the second function gives us the Kth smallest element of that BST.

// Both functions have two arguments one is root and another is K. In Kthlargest element function I call that function in reverse inorder traversal that means first right subtree after that root and last left subtree if I decrement k by 1 in each function because the maximum value of that BST is the right-most subtree value that’s why we decrement K by 1 each function if any instances we found K is equal to 0 then simply return the root(which is our desired value). The question is why we reduce  K by 1 because we traverse like reverse inorder traversal so if we construct an array by traversal the 0 indexed value will be the rightmost value and the and the next value will be the next function which terminated after that.

// Now, comes to the kthsmallest element same as the kthlargest element just one change that is we follow inorder traversal here because we will get the element in a sorted order that’s why we call the left subtree first and after that root and after that, we call right subtree and we decrement K by 1 in each function. If any instance we found k is equal to 0 then we return the root. If any function we found that root is equal to NULL then return NULL.

// In this program we have one corner case if we found NULL after executing the function then the K is greater than N in that case we simply print Invalid input.

// Smallest Kth
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

class SolutionSmallestKth {
  constructor() {
    this.result = 0;
    this.count = 0;
  }

  kthSmallest(root, k) {
    this.traversal(root, k);
    return this.result;
  }

  traversal(root, k) {
    if (root === null) {
      return;
    }

    this.traversal(root.left, k);
    this.count++;
    if (this.count === k) {
      this.result = root.val;
      return;
    }
    this.traversal(root.right, k);
  }
}


// Largest Kth
class Node {
    constructor(data) {
      this.data = data;
      this.left = this.right = null;
    }
  }
  
  class SolutionLargestKth {
    constructor() {
      this.ans = 0;
      this.count = 0;
    }
  
    kthLargest(root, k) {
      this.traversal(root, k);
      return this.ans;
    }
  
    traversal(root, k) {
      if (root === null) return;
  
      this.traversal(root.right, k);
      this.count++;
      if (this.count === k) {
        this.ans = root.data;
        return;
      }
      this.traversal(root.left, k);
    }
  }

// Example usage for Smallest Kth
const rootSmallestKth = new TreeNode(30);
rootSmallestKth.left = new TreeNode(15);
rootSmallestKth.right = new TreeNode(48);
rootSmallestKth.left.right = new TreeNode(20);

const smallestKthSolution = new SolutionSmallestKth();
console.log(smallestKthSolution.kthSmallest(rootSmallestKth, 2));

// Example usage for Largest Kth
const rootLargestKth = new Node(3);
rootLargestKth.left = new Node(1);
rootLargestKth.right = new Node(4);
rootLargestKth.left.right = new Node(2);

const largestKthSolution = new SolutionLargestKth();
console.log(largestKthSolution.kthLargest(rootLargestKth, 1));


//Time Complexity is O(N)
//Space Complexity is O(N)
