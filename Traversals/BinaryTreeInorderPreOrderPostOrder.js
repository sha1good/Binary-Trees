// Binary Tree Traversal : Inorder Preorder Postorder
// The tree is a non-linear data structure, unlike Linked List and Arrays. It is a hierarchical data structure that can be traversed in the following ways:-

// Inorder Traversal
// Preorder Traversal
// Postorder Traversal
// Level Order Traversal.
// For the given Tree,

// Inorder Traversal
// Inorder Traversal is one of the tree traversals in which the left subtree is visited first then visit the root and then the right subtree is visited.

// Inorder Traversal –  4 2 5 1 6 3

// Algorithm of Inorder Traversal

// Traverse the left subtree
// Print the root
// Traverse the right subtree

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function inOrderTrav(curr, inOrder) {
  if (curr === null) {
    return;
  }

  inOrderTrav(curr.left, inOrder);
  inOrder.push(curr.data);
  inOrderTrav(curr.right, inOrder);
}

// Example usage:
// Assuming you have a root node, you can call inOrderTrav like this:
// const root = new Node(/* initial data */);
// const inOrderResult = [];
// inOrderTrav(root, inOrderResult);

// Applications of Inorder Traversal

// If inorder traversal of Binary Search Tree (BST) is done , we get increasing order.
// We can get reversed order / Decreasing order by doing inorder traversal in reverse
//  order ( where right subtree is called first and then left subtree is called)

// Preorder Traversal
// Preorder Traversal is one of the tree traversals in which root is visited then the left subtree is visited and then the right subtree is visited.

// Preorder Traversal – 1 2 4 5 3 6

// Algorithm of Preorder Traversal

// Print the root
// Traverse the left subtree
// Traverse the right subtree
// Implementation of Preorder Traversal

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function preOrderTrav(curr, preOrder) {
  if (curr === null) return;

  preOrder.push(curr.data);
  preOrderTrav(curr.left, preOrder);
  preOrderTrav(curr.right, preOrder);
}

// Applications of Preorder Traversal

// The main use of Preorder is to get copy of Tree.
// Other use is to generate Prefix expression.

// Postorder Traversal
// Postorder Traversal is one of the tree traversals in which the left subtree is visited,
// then the right subtree is visited, and then the root is visited.

// Postorder Traversal – 4 5 2 6 3 1

// Algorithm of Postorder Traversal

// Traverse the left subtree
// Traverse the right subtree
// Print the root
// Implementation of Postorder Traversal

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function postOrderTrav(curr, postOrder) {
  if (curr === null) return;

  postOrderTrav(curr.left, postOrder);
  postOrderTrav(curr.right, postOrder);
  postOrder.push(curr.data);
}

// Applications of Postorder Traversal

// The main use of Postorder is to delete the tree
// (Before deleting the parent, we should delete children first).
// Other use is to generate Postfix expression.

// Levelorder Traversal
// Level order Traversal is one of the tree traversals in which every node
// in the tree is visited level by level.

// Level Order Traversal – 1 2 3 4 5 6

// Algorithm of Levelorder Traversal

// Remove a node from queue.
// Print the node.
// Add all of its children in the queue
// Implementation of Levelorder Traversal

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}
function levelOrder(root) {
  let ans = [];

  if (root === null) return ans;

  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let size = queue.length;
    let level = [];
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
      level.push(node.val);
    }

    ans.push(level);
  }

  return ans;
}

// Example usage:
// Assuming you have a root node, you can call levelOrder like this:
// const root = new TreeNode(/* initial value */);
// const result = levelOrder(root);

// Applications of Level order Traversal

// Level order traversal is actually Breadth First Search.
// Finding connected components in graph data structure.

