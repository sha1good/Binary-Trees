class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

class BinarySearchTreeIterator {
  constructor() {
    this.reverse = true;
    this.stack = [];
  }

  binarySearchTreeIterator(root, isReverse) {
    this.reverse = isReverse;
    return this.pushAll(root);
  }

  hasNext() {
    return this.stack.length !== 0;
  }

  next() {
    let tempNode = this.stack.pop();
    if (!this.reverse) this.pushAll(tempNode.right); // this is next
    if (this.reverse) this.pushAll(tempNode.left);
    return tempNode.data;
  }

  pushAll(node) {
    let currentNode = node;
    while (currentNode !== null) {
      this.stack.push(currentNode);
      if (this.reverse === true) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
  }
}

class Solution {
  constructor() {
    this.stack = [];
    this.reverse = true;
  }

  findSumEqualTarget(root, target) {
    if (root === null) return false;
    let bstLeft = new BinarySearchTreeIterator();
    bstLeft.binarySearchTreeIterator(root, false); // Next
    let bstRight = new BinarySearchTreeIterator(); // before
    bstRight.binarySearchTreeIterator(root, true);

    let i = bstLeft.next(); // from the front at index 0
    let j = bstRight.next(); // start from 11 from the back
    while (i < j) {
      if (i + j === target) return true;
      else if (i + j < target) i = bstLeft.next(); // i index will be incremeent
      else j = bstRight.next();
    }
    return false;
  }
}

let root = new TreeNode(6);
root.left = new TreeNode(3);
root.right = new TreeNode(8);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(7);

let target = 11;

let solution = new Solution();
let result = solution.findSumEqualTarget(root, target);

if (result) {
  console.log("There exist a sum with target equals ", target);
} else {
  console.log("There is NO sum with target equals ", target);
}


// Time Complexity is O(N)
//Space complexity is O(H) * 2. Where H is the height of the tree.
