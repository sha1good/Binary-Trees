class TreeNode {
  // Constructor to initialize the node with a
  // value and set left and right pointers to null
  constructor(x) {
    this.data = x;
    this.left = null;
    this.right = null;
  }
}

function inorderSuccessorBST(root, value) {
  let successor = null;

  while (root !== null) {
    if (value.data >= root.data) {
      root = root.right;
    } else {
      successor = root;
      root = root.left;
    }
  }

  return successor;
}

function inorderPredecessorBST(root, p) {
  let predecessor = null;
  let currentNode = root;

  while (root !== null) {
    if (p.data >= currentNode.data) {
      predecessor = currentNode;
      root = root.right;
    } else {
      currentNode = currentNode.left;
    }
  }

  return predecessor;
}
// Creating a sample tree
let root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(7);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(3);
root.left.left.left = new TreeNode(1);
root.right.right.left = new TreeNode(8);
root.right.right.right = new TreeNode(10);

let value = root.left.right;
let result = inorderSuccessorBST(root, value);
console.log(result.data);

let res = inorderPredecessorBST(root, value);
console.log(res.data);

//Time Complexity  is O(H), where H is the height of the binary tree
//Space complexity is O(1)
