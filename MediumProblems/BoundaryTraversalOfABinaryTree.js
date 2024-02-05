// // Problem Statement: BoundaryTraversal of a binary tree. Write a program for
// // the Anti-Clockwise Boundary traversal of a binary tree.

// Approach: Boundary traversal in an anti-clockwise direction can be described as a traversal consisting of three parts:

// Part 1: Left Boundary of the tree (excluding the leaf nodes).
// Part 2: All the leaf nodes travelled in the left to right direction.
// Part 3: Right Boundary of the tree (excluding the leaf nodes), traversed in the reverse direction.
// We take a simple data structure like a vector/Arraylist to store the Boundary Traversal. The root node is coming from both the boundaries (left and right). Therefore, to avoid any confusion, we push it on our list at the very start.

// We will now see the approach to finding these three parts.

// Part 1:  Left Boundary

// To traverse the left boundary, we can set a simple iteration. Initially, we make the cur pointer point to the root’s left. In every iteration, if the cur node is not a leaf node, we print it. Then we always try to move left of the cur pointer. If there is no left child, then we move to the right of cur and in the next iteration, again try to move to the left first. We stop our execution when cur is pointing to NULL.

// Part 2: Leaf nodes

// To print the leaf nodes, we can do a simple preorder traversal, and check if the current node is a leaf node or not. If it is a leaf node just print it.

// Please note that we want the leaves to come in a specific order which is bottom-left to top-right, therefore a level order traversal will not work because it will print the upper-level leaves first. Therefore, we use a preorder traversal.

// Part 3: Right Boundary

// We need to print the right boundary in the Reverse direction. It is very similar to the left boundary traversal. We initialize our cur pointer to the right child of the root node and set an iterative loop. To achieve the reverse direction, we take an auxiliary list. In every iteration, we check if the current node is not a leaf node then we push it to the auxiliary list. Then we first try to move right of cur, if there is no right child only then we move left. We stop our execution once cur points to NULL.

// Now the auxiliary list contains the nodes of the right boundary. We iterate from the end to start off this list and in every iteration, push the value to our main boundary traversal list.
//This way we get the nodes in the reverse direction.

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
//is a leaf if the node does not have neither left branch nor right branch
function isLeaf(root) {
  return root && !root.left && !root.right;
}

function addLeftBoundary(root, result) {
  let currentNode = root.left;

  while (currentNode) {
    if (!isLeaf(currentNode)) result.push(currentNode.data);
    if (currentNode.left) currentNode = currentNode.left;
    else currentNode = currentNode.right;
  }
}

function addLeaves(root, result) {
  if (isLeaf(root)) {
    result.push(root.data);
    return;
  }
  if (root.left) addLeaves(root.left, result);
  if (root.right) addLeaves(root.right, result);
}

function addRightBoundary(root, result) {
  let currentNode = root.right;
  let temp = []; // I used this, so that I will be able to add the right node in reverse order

  while (currentNode) {
    if (!isLeaf(currentNode)) temp.push(currentNode.data);
    if (currentNode.right) currentNode = currentNode.right;
    else currentNode = currentNode.left;
  }
  let tempSize = temp.length - 1;
  for (let i = tempSize; i >= 0; i--) {
    result.push(temp[i]);
  }

  return result;
}
function printBoundary(root) {
  let result = [];
  // if the root /node === null, we will return an empty array
  if (!root) return result;

  if (!isLeaf(root)) {
    result.push(root.data);
  }
  addLeftBoundary(root, result);
  // add leaf nodes
  addLeaves(root, result);
  addRightBoundary(root, result);
  return result;
}

function newNode(data) {
  let node = new TreeNode(data);
  node.left = null;
  node.right = null;
  return node;
}

function main() {
  let root = newNode(1);
  root.left = newNode(2);
  root.left.left = newNode(3);
  root.left.left.right = newNode(4);
  root.left.left.right.left = newNode(5);
  root.left.left.right.right = newNode(6);
  root.right = newNode(7);
  root.right.right = newNode(8);
  root.right.right.left = newNode(9);

  let boundaryTraversal = [];
  boundaryTraversal = printBoundary(root);

  console.log(boundaryTraversal.join(" "));
}

main();
