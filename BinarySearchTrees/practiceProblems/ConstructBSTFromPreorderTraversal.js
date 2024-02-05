function bstFromPreoder(preOrder) {
  return build(preOrder, [0], Infinity);
}

function build(preOrder, min, bound) {
  if (min[0] === preOrder.length || preOrder[min[0]] > bound) {
    return null;
  }

  let root = new TreeNode(preOrder[min[0]++]);
  root.left = build(preOrder, min, root.val);
  root.right = build(preOrder, min, bound);

  return root;
}

class TreeNode {
  // Constructor to initialize the node with a
  // value and set left and right pointers to null
  constructor(x) {
    this.val = x;
    this.left = null;
    this.right = null;
  }
}

let preOrder = [8, 5, 1, 7, 10, 12];

let result = bstFromPreoder(preOrder);

console.log(result);

//Time Complexity is O(N)
// Space complexity O(1)
