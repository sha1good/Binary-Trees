// Approach: In order to check whether two trees are identical or not, we need to traverse the trees. While traversing we first check the value of the nodes, if they are unequal we can simply return false, as trees are non-identical. If they are the same, then we need to recursively check their left child as well as the right child. When we get all the three values as true(node values, left child, right child) we can conclude that these are identical trees and can return true. Any other combination will return false.

// Dry Run:

// (i) Initially we have variables n1 and n2 pointing to the roots of both trees. This function is inside our recursion stack as well.

// (ii) First we check the values at the nodes. As the values of nodes are equal, we proceed further and recursively call the left child of both nodes. This second function is pushed to our recursion stack.

// (iii) Again we check the nodes. As they are equal, we again check for the left subtrees and add the function to our recursion stack.

// (iv) Both n1 and n2 point to NULL, so the base condition will be true and we will return true from this function.

// (v) At nodes pointing to 2, two out of three conditions return true, so we will proceed further and check the third condition. We will recursively call the right child of the nodes. Again that function will be added to our recursive stack.

// (vi) Similar to step 4, n1 and n2 point to NULL, therefore we will again return true and the function will be removed from our recursion stack. Now at nodes pointing to 2, all three conditions return true (node values, left child and right child), therefore we can return true from this function and remove it from the recursion stack. Then at node 1, two conditions are true, therefore we call the right child of n1 and n2 to check the third condition.

// (vii) At nodes pointing to 3, we first check the data values which are equal, then we recursively call the function to check for their left child. It turns out to be identical and we get the return value true, then we recursively call the function to check for their right child.

// (viii) Now n1 points to a node with value 5 whereas n2 points to NULL, this can’t be the case with an identical tree, our second base condition hits and we return false from this function. In the parent function where n1 and n2 point to 3, only two out of three conditions return true, therefore we will return the value false. In its parent function where n1 and n2 points to 1, again only two out of three conditions return true, therefore we will return false. Hence we will return a false value.

// As our first function returns a false to our main function, we can conclude that these two trees are Non-identical.
class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function isIdentical(node1, node2) {
  if (node1 === null && node2 === null) return true;
  else if (node1 === null || node2 === null) return false;

  return (
    node1.data === node2.data &&
    isIdentical(node1.left, node2.left) &&
    isIdentical(node1.right, node2.right)
  );
}
function newNode(data) {
  let node = new TreeNode(data);
  node.left = null;
  node.right = null;
  return node;
}

function main() {
  let root1 = newNode(1);
  root1.left = newNode(2);
  root1.right = newNode(3);
  root1.right.left = newNode(4);
  root1.right.right = newNode(5);

  let root2 = newNode(1);
  root2.left = newNode(2);
  root2.right = newNode(3);
  root2.right.left = newNode(4);

  if (isIdentical(root1, root2)) {
    console.log("Two Trees are identical");
  } else {
    console.log("Two Trees are NOT identical");
  }
}

main();

// Time Complexity: O(N).

// Reason: We are doing a tree traversal.

// Space Complexity: O(N)

// Reason: Space is needed for the recursion stack.
// In the worst case (skewed tree), space complexity can be O(N).
