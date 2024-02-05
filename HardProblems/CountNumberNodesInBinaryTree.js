// n this article, we will solve the most asked coding interview problem: Count Number of Nodes in a Binary Tree

// Write a program that calculates the number of nodes in a complete binary tree.

// Example:

// Output:

// The total number of nodes in the given complete binary tree are: 6
// What is a complete binary tree?

// A complete binary tree is a binary tree whose:

// All levels except the last one are completely filled. The last level may or may not be completely filled.
// Nodes in the last level are as left as possible.

// Disclaimer: Don’t jump directly to the solution, try it out yourself first.

// Solution :
// Solution 1: Using any tree traversal – O(N) Approach

// Approach:

// The first approach that comes to our mind is to use any tree traversal ( say inorder), and count the number of nodes as we are traversing the tree.

class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

function preOrderTrav(node, count) {
  if (node === null) return;

  count.value++;
  preOrderTrav(node.left, count);
  preOrderTrav(node.right, count);
  return count.value;
}

function newNode(data) {
  let node = new Node(data);
  node.left = null;
  node.right = null;
  return node;
}

function main() {
  let root = newNode(1);
  root.left = newNode(2);
  root.right = newNode(3);
  root.left.left = newNode(4);
  root.left.right = newNode(5);
  root.right.left = newNode(6);

  let count = { value: 0 };
  let result = preOrderTrav(root, count);

  console.log(
    "The total number of nodes in the given complete binary tree are: " + result
  );
}

main();

// The total number of nodes in the given complete binary tree are: 6

// Time Complexity: O(N).

// Reason: We are traversing for every node of the tree

// Space Complexity: O(logN)

// Reason: Space is needed for the recursion stack. As it is a complete tree,
// the height of that stack will always be logN.

// Approach 2: Efficient Approach – O(log^2 N) solution

// We will now try to form an algorithm that takes less than O(N) time.

// We are given a complete binary tree that has two special properties:

// All levels except the last one are completely filled
// Last level nodes are as left as possible.
// If we get to know the height of the binary tree (say h), we can find out the maximum number of nodes that can be present by the formula: 2h – 1. So there is some relation between height and number of nodes.

// How to find the height in less than O(N) time? As the given tree is a complete binary tree, we can find the height of the binary tree by just finding the left height of the tree, as the left height will always be equal to the height of the tree.

// If the last level of the binary tree is completely filled( a perfect binary tree), then this left height will give us the total count of nodes present by the formula: 2h – 1. Now how to check whether the last level is completely filled? A simple way is to find the right height of the given tree, then:

// If leftHeight == rightHeight, then the last level nodes are completely filled
// If leftHeight != rightHeight, then the last level nodes are not completely filled
// In the second case, when leftHeight != rightHeight, we can take the help of recursion and say to recursively find the number of nodes in the left subtree (say leftNodes) and in the right subtree(say rightNodes) and then return 1 + leftNodes + rightNodes.

// Approach:

// The algorithm steps can be stated as :

// Set a recursive function to calculate the number of nodes.
// In the recursive function, calculate leftHeight and the right Height of the tree from the given node.
// If leftHeight == rightHeight, return 2leftHeight – 1.
// If leftHeight != rightHeight, recursively call the function to calculate nodes in left subtree(leftNodes) and the right subtree(rightNodes) and return 1+leftNodes+rightNodes.
// Dry Run:

// Let us take a bigger example:

// (i) First when we are at the root node, we will find the left height and the right height. In this case, as leftHeight != rightHeight, we will recursively call the function to find leftNodes and rightNodes.

// (ii) Then, we find the answer for the first recursive call of step 1. When root = 2, we see that the left height == right Height(both equal to 3), so we simply return 2^(3) – 1 (which is 7).

// (iii) Then, we find the answer for the second recursive call of step 1. When root = 3, we see that the left height == right Height(both equal to 2), so we simply return 2^(2) – 1 (which is 3).

// (iv) At last, we will return to the root node of the tree (node 1) and we will return 1+ leftNodes + rightNodes, i.e 1+7+3 = 11.

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class TUF {
  static findLeftHeight(node) {
    let height = 0;
    while (node) {
      height++;
      node = node.left;
    }
    return height;
  }

  static findRightHeight(node) {
    let height = 0;
    while (node) {
      height++;
      node = node.right;
    }
    return height;
  }
  static countNodes(root) {
    if (!root) return 0;

    let leftHeight = TUF.findLeftHeight(root);
    let rightHeight = TUF.findRightHeight(root);

    if (leftHeight === rightHeight) Math.pow(2, leftHeight) - 1;

    return 1 + TUF.countNodes(root.left) + TUF.countNodes(root.right);
  }
}

function mains() {
  // Main program
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  root.left.left.left = new TreeNode(8);
  root.left.left.right = new TreeNode(9);
  root.left.right.left = new TreeNode(10);
  root.left.right.right = new TreeNode(11);

  console.log(
    "The total number of nodes in the given complete binary tree are: " +
      TUF.countNodes(root)
  );
}

mains();

// The total number of nodes in the given complete binary tree are: 11

// Time Complexity: O(log^2 N).

// Reason: To find the leftHeight and right Height we need only logN time and 
// in the worst case we will encounter the second case(leftHeight!=rightHeight) for at max logN times, so total time complexity will be O(log N * logN)

// Space Complexity: O(logN)

// Reason: Space is needed for the recursion stack when calculating height. 
// As it is a complete tree, the height will always be logN.
