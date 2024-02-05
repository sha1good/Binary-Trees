class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

// Creating a new node by using dynamic allocation.
let root = new Node(2);
root.left = new Node(1);
root.right = new Node(2);
root.left.right = new Node(2);
