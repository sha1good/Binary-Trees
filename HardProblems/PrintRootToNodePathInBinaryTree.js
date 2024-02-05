// Print Root to Node Path in a Binary Tree
// Problem Statement: Print Root to Node Path In A Binary Tree. Write a program to print path from root to a given node in a binary tree.

// Problem Description:

// We are given a binary tree T and a node V. We need to print a path from the root of the tree to the node.

// Note:

// No two nodes in the tree have the same data value.
// It is assured that the node V is present and a path always exists.
// Examples:

// Disclaimer: Don’t jump directly to the solution, try it out yourself first.

// Pre-req: Traversal Techniques & Recursion

// Solution :

// Intuition:

// First of all, we need to find the node V in our tree for which we need to find the path. We can use any depth-first traversal technique (preorder, inorder, postorder) in order to find the required node.

// If we look at the diagram below, we see that whenever we find the required node, its path is well present in our recursion call stack. We just need to figure out how we can use the recursive calls to print the required path.

// Approach:

// We will use an external list to store our path. This list will be passed by reference to our recursive function. Moreover, we can set the return value of our function as boolean, this will help us to know whether node V was found in a subtree or not.

// The algorithm steps can be stated as follows:

// We pass the function with our root node, the path list and node V.
// For the base case, if root is pointing to NULL, we return false as clearly node V can’t be found.
// Now we first push the node to our path list.
// Then we check whether the current node is the target node or not, if it is then no further execution is needed and we return to the parent function.
// If not, then we recursively call its left and right child to find the target node V. If any one of them returns true, it means we have found node V at lower levels and return true from the current function.
// If the value is not found at the current node and neither in any of the recursive calls, it means that the value is not present in the current sub-tree, therefore we pop out the current node from the path list and return false.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function getPath(root, array, x) {
  // if root is NULL
  // there is no path
  if (!root) return false;

  // push the node's value in 'arr'
  array.push(root.data);

  // if it is the required node
  // return true
  if (root.data === x) return true;

  // else check whether the required node lies
  // in the left subtree or right subtree of
  // the current node
  if (getPath(root.left, array, x) || getPath(root.right, array, x))
    return true;

  // required node does not lie either in the
  // left or right subtree of the current node
  // Thus, remove current node's value from
  // 'arr'and then return false
  array.pop();
  return false;
}
function newNode(data) {
  const node = new Node(data);
  return node;
}

function main() {
  const root = newNode(1);
  root.left = newNode(2);
  root.left.left = newNode(4);
  root.left.right = newNode(5);
  root.left.right.left = newNode(6);
  root.left.right.right = newNode(7);
  root.right = newNode(3);

  let array = [];
  //let result = getPath(root, array, 7);
  getPath(root, array, 7);
  for (let result of array) {
    console.log(result);
  }
}

main();

// Time Complexity: O(N)

// Reason: We are doing a simple tree traversal.

// Space Complexity: O(N)

// Reason: In the worst case (skewed tree), space complexity can be O(N).
