// Defining the class for Tree implementation
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Function for inserting a new node in BST
function newNode(data) {
  let node = new Node(data);
  node.left = null;
  node.right = null;
  return node;
}

function findFloor(root, key) {
  let floor = -1;
  while (root !== null) {
    // If the input is already available in BST, return that.
    if (root.data === key) {
      return key;
    }
    // If the input is greater than root, we mark floor to be root and move to
    // right subtree where it may be further closer to the input value
    else if (root.data < key) {
      floor = root.data;
      root = root.right;
    }
    // Otherwise, the floor value must be in the left subtree.
    else {
      root = root.left;
    }
  }

  return floor;
}

// Driver Code
let root = newNode(10);
root.left = newNode(5);
root.left.left = newNode(4);
root.left.right = newNode(7);
root.left.right.right = newNode(8);
root.right = newNode(11);

console.log(findFloor(root, 6));

// Time Complexity: O(log(N)) {Similar to Binary Search, 
// at a given time we’re searching one half of the tree, 
// so the time taken would be of the order log(N) where N are the total nodes in the BST 
// and log(N) is the height of the tree.}

// Space Complexity: O(1) {As no extra space is being used, we’re just traversing the BST.}
