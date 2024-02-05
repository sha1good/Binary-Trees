class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

class NodeValue {
  constructor(minNode, maxNode, maxSize) {
    this.minNode = minNode;
    this.maxNode = maxNode;
    this.maxSize = maxSize;
  }

  largestBSTSubtree(root) {
    // if the node is null, set the left largest node to large value
    // and right  to smallest value and maxSize to 0
    if (root === null) {
      return new NodeValue(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0);
    }
    // Get values from the left and right subtrees of the current tree
    let left = this.largestBSTSubtree(root.left);
    let right = this.largestBSTSubtree(root.right);

    //if Current Node  is greater max node in the left AND  smaller than min in the right
    // then it is a BST
    if (left.maxNode < root.data && root.data < right.minNode) {
      // It is a BST
      return new NodeValue(
        Math.min(left.minNode, root.data),
        Math.max(root.data, right.maxNode),
        1 + left.maxSize + right.maxSize
      );
    }
    // Otherwise it  is not a BST, return [-Infinity, Infinty] so that parent cant be a valid bST
    return new NodeValue(
      Number.MIN_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER,
      Math.max(left.maxSize, right.maxSize)
    );
  }
}

let root = new TreeNode(20);
root.left = new TreeNode(15);
root.right = new TreeNode(40);
root.left.left = new TreeNode(14);
root.left.right = new TreeNode(18);
root.right.left = new TreeNode(30);
root.right.right = new TreeNode(60);
root.right.right.left = new TreeNode(50);
root.left.left.right = new TreeNode(17);
root.left.right.left = new TreeNode(16);
root.left.right.right = new TreeNode(19);

let solution = new NodeValue();
let result = solution.largestBSTSubtree(root);

console.log(result.maxSize);



//Time Complexity is O(N) //  post Order traversal
//Space complexity is O(1) if we do not take recursion  into consideration
