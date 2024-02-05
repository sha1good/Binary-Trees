// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Example 1:

// Input: root = [1,null,2,3]
// Output: [1,2,3]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

// Solution 1: Iterative

// Intuition: In preorder traversal, the tree is traversed in this way: root, left, right. When we visit a node, we print its value, and then we want to visit the left child followed by the right child. The fundamental problem we face in this scenario is that there is no way that we can move from a child to a parent. To solve this problem, we use an explicit stack data structure. While traversing we can insert node values to the stack in such a way that we always get the next node value at the top of the stack.

// Approach:

// The algorithm approach can be stated as:

// We first take an explicit stack data structure and push the root node to it.(if the root node is not NULL).
// Then we use a while loop to iterate over the stack till the stack remains non-empty.
// In every iteration we first pop the stack’s top and print it.
// Then we first push the right child of this popped node and then push the left child, if they are not NULL. We do so because stack is a last-in-first-out(LIFO) data structure. We need to access the left child first, so we need to push it at the last.
// The execution continues and will stop when the stack becomes empty. In this process, we will get the preorder traversal of the tree.

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

function preOrderTrav(curr) {
  let preOrder = [];
  if (curr === null) return preOrder;

  let stack = [];
  stack.push(curr);

  while (stack.length !== 0) {
    let topNode = stack.pop();
    preOrder.push(topNode.data);

    if (topNode.right !== null) stack.push(topNode.right);
    if (topNode.left !== null) stack.push(topNode.left);
  }

  return preOrder;
}

function newNode(data) {
  let node = new TreeNode(data);
  node.left = null;
  node.right = null;
  return node;
}

// Example usage:
let root = newNode(1);
root.left = newNode(2);
root.right = newNode(3);
root.left.left = newNode(4);
root.left.right = newNode(5);
root.left.right.left = newNode(8);
root.right.left = newNode(6);
root.right.right = newNode(7);
root.right.right.left = newNode(9);
root.right.right.right = newNode(10);

let preOrder = preOrderTrav(root);

console.log("The preOrder Traversal is:", preOrder.join(" "));

// Time Complexity: O(N).

// Reason: We are traversing N nodes and every node is visited exactly once.

// Space Complexity: O(N)

// Reason: In the worst case ,the space complexity can be considered as O(N).

// Solution 2: Recursive

// Intuition: In preorder traversal, the tree is traversed in this way: root, left, right. When we visit a node, we print its value, and then we want to visit the left child followed by the right child. The fundamental problem we face in this scenario is that there is no way that we can move from a child to a parent. To solve this problem, we use recursion and the recursive call stack to locate ourselves back to the parent node when execution at a child node is completed.

// Approach: In preorder traversal, the tree is traversed in this way: root, left, right.

// The algorithm approach can be stated as:

// We first visit the root node and before visiting its children we print its value.
// After this, we recursively visit its left child.
// Then we recursively visit the right child.
// If we encounter a node pointing to NULL, we simply return to its parent.

class TreeNodeRecursive {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

function PreOrderTravRecursive(curr, preOrder) {
  if (curr === null) return;

  preOrder.push(curr.data);
  PreOrderTravRecursive(curr.left, preOrder);
  PreOrderTravRecursive(curr.right, preOrder);
  return preOrder;
}

function newNodeRecursive(data) {
  let node = new TreeNodeRecursive(data);
  node.left = null;
  node.right = null;
  return node;
}

// Example usage:
let rootRec = newNodeRecursive(1);
rootRec.left = newNodeRecursive(2);
rootRec.right = newNodeRecursive(3);
rootRec.left.left = newNodeRecursive(4);
rootRec.left.right = newNodeRecursive(5);
rootRec.left.right.left = newNodeRecursive(8);
rootRec.right.left = newNodeRecursive(6);
rootRec.right.right = newNodeRecursive(7);
rootRec.right.right.left = newNodeRecursive(9);
rootRec.right.right.right = newNodeRecursive(10);

let preOrderArr = [];
let preOrderRecursive = PreOrderTravRecursive(rootRec, preOrderArr);

console.log("The preOrder Traversal is:", preOrderRecursive.join(" "));
// for (let i = 0; i < preOrderRecursive.length; i++) {
//   console.log("The preOrder Traversal is:", preOrderRecursive[i].data);
// }

// Time Complexity: O(N).

// Reason: We are traversing N nodes and every node is visited exactly once.

// Space Complexity: O(N)

// Reason: Space is needed for the recursion stack. In the worst case (skewed tree), space complexity can be O(N).
