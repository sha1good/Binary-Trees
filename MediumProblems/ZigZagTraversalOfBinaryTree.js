// Problem Statement: Given the root of a binary tree, return the zigzag level order traversal of Binary Tree. (i.e., from left to right, then right to left for the next level and alternate between).

// Examples:

// Example 1:

// Input: root = [3,9,20,null,null,15,7]

// Output: [[3],[20,9],[15,7]]

// Explaination: From the root, we follow this terminology, left to right -> right to left -> left to right and so on so forth.

// Example 2:

// Input: root = [[0]]

// Output : [[0]]

// Explanation: We just have a single node which acts as the root, so going from left to right, we get just one node that is the root node itself.

// Intuition: Considering the fact that we need to print the nodes, level by level, our first guess would definitely be that it must be related to level order traversal. If we closely examine, for even levels we need to go from left to right while for odd levels we need to go from right to left.

// Approach: The above idea, could be implemented with a queue.
//We initially keep an empty queue and push the root node.
//We also need to keep the left to right bool variable that keeps check of the current level we are in.
//As we traverse nodes in the queue, we need to push them in a temporary array.
//If left to right is false we need to reverse the array and push it in our data structure or else, simply push it in our data structure.
//In the end, when we have finished traversing the current level, we need to toggle our left to the right variable.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function zigzagLevelOrder(root) {
  let result = [];
  if (root === null) return result;
  let queue = [root];
  let leftToRight = true;

  while (queue.length !== 0) {
    let size = queue.length;
    console.log(size);
    let row = Array(size);
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      // find position to fill node's value in the row array
      let index = leftToRight ? i : size - 1 - i;
      row[index] = node.value;

      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    leftToRight = !leftToRight;
    result.push(row);
  }
  return result;
}

function main() {
  let root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);

  let ans = zigzagLevelOrder(root);

  console.log("Zig Zag Traversal of Binary Tree");
  for (let i = 0; i < ans.length; i++) {
    console.log(ans[i].join(" "));
  }
}

main();
// Time Complexity: O(N)

// Space Complexity: O(N)
