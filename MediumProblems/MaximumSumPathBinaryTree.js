// // Problem Statement: Write a program to find the maximum sum path in a binary tree.
// // A path in a binary tree is a sequence of nodes where every adjacent pair of nodes are connected by an edge. A node can only appear in the sequence at most once. A path need not pass from the root. We need to find the path with the maximum sum in the binary tree.

// // Example:

// // Input:

// // Output: The Max Path Sum for the Tree is 42

// Solution:
// Approach: A brute force approach would be to generate all paths and compare them. Generating all paths will be a time-costly activity therefore we need to look for something else.

// We first need to define what is the maximum path sum through a given node (when that node is acting as the root node/curving point). At a given node with a value, if we find the max leftSumPath in the left-subtree and the max rightSumPath in the right subtree, then the maxPathSum through that node is value+(leftSumPath+rightSumPath).

// Now we can apply this formula at every node by doing a simple tree traversal and storing the maximum value (our answer) in a reference variable.

// For our recursion to work, it is very important to understand what value we return from our function. In our recursive function, we find and compare the maxPathSum from a given node when it is the root/turning point of the path. But what we return is the maxPathSum of that same node when it is NOT the root/turning point of the path. To find the latter maxPath, we no longer have the liberty to consider both leftMaxPath and rightMaxPath, we will simply take the maximum of the two and it to the value of the node.

// To summarize:

// Initialize a maxi variable to store our final answer.
// Do a simple tree traversal. At each node, find  recursively its leftMaxPath and its rightMaxPath.
// Calculate the maxPath through the node as val + (leftMaxPath + rightMaxPath) and update maxi accordingly.
// Return the maxPath when node is not the curving point as val + max(leftMaxPath, rightMaxPath).

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function findMaxPathSum(root, maxi) {
  if (!root) return 0;
  // I used 0 here to make  sure that I did not return negative values
  // as Maxsum
  let leftMaxPath = Math.max(0, findMaxPathSum(root.left, maxi));
  let rightMaxPath = Math.max(0, findMaxPathSum(root.right, maxi));

  let value = root.data;
  // maxi.value = Math.max(maxi.value, leftMaxPath + rightMaxPath + value);
  maxi.value = Math.max(maxi.value, leftMaxPath + rightMaxPath + value);
  return value + Math.max(leftMaxPath, rightMaxPath);
}

function maxPathSum(root) {
  let maxi = { value: Number.MIN_SAFE_INTEGER }; // [Number.MIN_SAFE_INTEGER]
  findMaxPathSum(root, maxi);
  return maxi.value;
}
function newNode(data) {
  let node = new TreeNode(data);
  node.left = null;
  node.right = null;
  return node;
}

function main() {
  let root = newNode(-10);
  root.left = newNode(9);
  root.right = newNode(20);
  root.right.left = newNode(15);
  root.right.right = newNode(7);

  let answer = maxPathSum(root);
  console.log("The Max Path Sum for this tree is", answer);
}

main();

// The Max Path Sum for this tree is 42

// Time Complexity: O(N).

// Reason: We are doing a tree traversal.

// Space Complexity: O(N)

// Reason: Space is needed for the recursion stack.
// In the worst case (skewed tree), space complexity can be O(N).

function findAdeade(maxi) {
  let ade = 4;
  return Math.max(maxi, ade);
  //return maxi;
}

// function Ola() {
//   let maxi = 0;
//   findAdeade(maxi);

//   console.log(maxi);
// }

// Ola();

function findAdeade(maxi) {
  let ade = 4;
  return Math.max(maxi, ade);
}

function Ola() {
  let maxi = 0;
  maxi = findAdeade(maxi);

  console.log(maxi); // Now this will print 4
}

Ola();
