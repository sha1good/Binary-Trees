class TreeNode {
  // Constructor to initialize the node with a
  // value and set left and right pointers to null
  constructor(x) {
    this.val = x;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  constructor() {
    this.stack = [];
  }

  binarySearchTreeIterator(root) {
    return this.pushAll(root);
  }

  hasNext() {
    return this.stack.length !== 0;
  }

  next() {
    let tempNode = this.stack.pop();
    this.pushAll(tempNode.right);
    return tempNode.val;
  }

  pushAll(currentNode) {
    while (currentNode !== null) {
      this.stack.push(currentNode);
      currentNode = currentNode.left;
    }
  }
}

let root = new TreeNode(6);
root.left = new TreeNode(3);
root.right = new TreeNode(8);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(7);

let solution = new Solution();
solution.binarySearchTreeIterator(root);

while (solution.hasNext()) {
  console.log(solution.next());
}

//Time Complexity O(1)  => O(N/N)
//Space Complexity  is O(H)
