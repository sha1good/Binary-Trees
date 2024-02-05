// Problem Statement: Given a Binary Tree, find the Right/Left view of it. The right view of a Binary Tree is a set of nodes visible when the tree is viewed from the right side. The left view of a Binary Tree is a set of nodes visible when the tree is viewed from the left side.

// Example 1:

// Input:

// Output: Right view- 1 2
//         Left view- 1 3
// Explanation: Seeing through the left side it sees only 1 and 3 while through the right side we only see 1 and 2.

// Example 2:

// Input:

// Output: Right View- 10 30 60
//         Left view- 10 20 40
// Explanation: Seeing through the left side it sees only 10, 20, and 40 while through the right side we only see 10, 30, and 60.

// Solution:

// Disclaimer: Don’t jump directly to the solution, try it out yourself first.

// Intuition: We have to do a Recursive Level Order Traversal.

// Root Right Left     —-> for Right view

// Root Left Right     —–> for Left view

// Approach:

// Create an vector data structure inside both the left and the right side view function
// Call for the recursive _left and recursive_right function respectively with the (root,level,vector). Here level will be initially passed as 0.
// Return the vector.
// Now in the recursive_left function
// If vector size is equal to the level then push_back its node value to the vector data structure.
// Otherwise call recursive_left for (node->left,level+1,vector)
// Call recursive_left for (node->right,level+1,vector)
// Now in the recursive_right function
// If vector size is equal to the level then push_back its node value to the vector data structure.
// Otherwise call recursive_right for (node->right,level+1,vector)
// Call recursive_right for (node->left,level+1,vector)
// Tip: The Code for the Left and the Right View is almost identical.

// In the Right view code first, you have to call the recursive function for the right then the left node

// AND

// In the Right view code first, you have to call the recursive function for the Left than the right node
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  recursionRightSideView(root, level, result) {
    if (root === null) {
      return;
    }

    if (level === result.length) result.push(root.val);
    this.recursionRightSideView(root.right, level + 1, result);
    this.recursionRightSideView(root.left, level + 1, result);
  }
  rightSideView(root) {
    const result = [];
    this.recursionRightSideView(root, 0, result);
    return result;
  }
}

// Example usage:
// Create a sample binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.right = new TreeNode(7);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.right.left = new TreeNode(6);

// Create an instance of the Solution class
const solution = new Solution();

// Call the rightSideView function and print the result
const result = solution.rightSideView(root);
console.log(result.join(" "));

console.log(" The below code is for the left view solution");

class TreeNodeLeft {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class SolutionL {
  recursionLeftSideView(root, level, result) {
    if (root === null) {
      return;
    }

    if (level === result.length) result.push(root.val);
    this.recursionLeftSideView(root.left, level + 1, result);
    this.recursionLeftSideView(root.right, level + 1, result);
  }

  leftSideView(root) {
    const result = [];
    this.recursionLeftSideView(root, 0, result);
    return result;
  }
}

// Example usage:
// Create a sample binary tree
const root1 = new TreeNodeLeft(1);
root1.left = new TreeNodeLeft(2);
root1.right = new TreeNodeLeft(3);
root1.right.right = new TreeNodeLeft(7);
root1.left.left = new TreeNodeLeft(4);
root1.left.right = new TreeNodeLeft(5);
root1.left.right.left = new TreeNodeLeft(6);

// Create an instance of the Solution class
const sol = new SolutionL();

// Call the rightSideView function and print the result
const res = sol.leftSideView(root1);
console.log(res.join(" "));
