class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

class Solution {
  constructor() {
    this.first = null;
    this.prev = null;
    this.middle = null;
    this.last = null;
  }

  inOrderTraversal(root) {
    if (root === null) return;

    this.inOrderTraversal(root.left);
    if (this.prev !== null && root.data < this.prev.data) {
      if (this.first === null) {
        this.first = this.prev;
        this.middle = root;
      } else {
        this.last = root;
      }
    }
    this.prev = root;
    this.inOrderTraversal(root.right);
  }
  recoverBST(root) {
    this.prev = Number.MIN_SAFE_INTEGER;
    this.inOrderTraversal(root);
    // if both first and last nodes  violate the bst, then I will swap them
    if (this.first !== null && this.last !== null) {
      let tempNode = this.first.data;
      this.first.data = this.last.data;
      this.last.data = tempNode;
    } else if (this.first !== null && this.middle !== null) {
      let tempNode = this.first.data;
      this.first.data = this.middle.data;
      this.middle.data = tempNode;
    }

    return root;
  }
}

let root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.right.left = new TreeNode(2);

let solution = new Solution();
let result = solution.recoverBST(root);
console.log(result);

// Time Complexity is O(N)
// Space complexity is O(1)
