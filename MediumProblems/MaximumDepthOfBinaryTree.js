// Problem Statement: Find the Maximum Depth of Binary Tree. Maximum Depth is the count of nodes of the longest path from the root node to the leaf node.

// Examples:

// Input Format: Given the root of Binary Tree

// Result: 4

// Explanation: Maximum Depth in this tree is 4 if we follow path 5 – 1 – 3 – 8 or 5 – 1 – 3 – 11

// Input Format:  Given the root of Binary Tree

// Result: 3

// Explanation: Maximum Depth in this tree is 3 , if we follow path 7 – 1 – 2. If we follow 7 – 3 path then depth is 2 ( not optimal)

// Input Format:  Given the root of Binary Tree

// Result: 1

// Explanation: Maximum Depth in this tree is 1 as there is only one node which is the root node.

// Note: We are counting depth in terms of Node, if the question was given in terms of edges then the answer will be 0 in the above case.

// Solution

// Disclaimer: Don’t jump directly to the solution, try it out yourself first.

// Solution 1:

// Intuition + Approach: Using LEVEL ORDER TRAVERSAL

// If we observe carefully, the depth of the Binary Tree is the number of levels in the binary tree. So, if we simply do a level order traversal on the binary tree and keep a count of the number of levels, it will be our answer.

// In this example, if we start traversing the tree level-wise, then we can reach at max Level 4, so our answer is 4.
//Because the maximum depth we can achieve is indicated by the last level at which we can travel.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function levelOrder(root) {
  if (root === null) return 0;

  let queue = [];
  queue.push(root);
  let level = 0;

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    level++;
  }
  return level;
}

function newNode(data) {
  let node = new Node(data);
  node.left = null;
  node.right = null;
  return node;
}

function main() {
  let root = newNode(5);
  root.left = newNode(2);
  root.right = newNode(1);
  root.left.right = newNode(10);
  root.right.left = newNode(3);
  root.right.right = newNode(4);
  root.right.left.left = newNode(8);
  root.right.left.right = newNode(11);

  let result = levelOrder(root);
  console.log(result);
}

main();

// Time Complexity: O(N)

// Space Complexity: O(N) ( Queue data structure is used )

// Intuition: Recursively ( Post Order Traversal )

// If we have to do it recursively, then what we can think of is, If I have Maximum Depth of Left subtree and Maximum Depth of Right subtree then what will be the height or depth of the tree?

// Exactly,

// 1 + max(depth of left subtree, depth of right subtree)
// So, to calculate the Maximum Depth, we can simply take the maximum of the depths of the left and right subtree and add 1 to it.

// Why take Maximum?? Because we need maximum depth so if we know left & right children’s maximum depth then we’ll definitely get to the maximum depth of the entire tree.

// Approach :

// We start to travel recursively and do our work in Post Order.
//  Reason behind using Post Order comes from our intuition , that if we know the result of  left and right child then we can calculate the result using that.
// This is exactly an indication of PostOrder, because in PostOrder we already calculated results for left and right children than we do it for current node.
// So for every node post order, we do Max( left result , right result ) + 1 and return it to the previous call.
// Base Case is when root == null so we need to return 0;

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  maxDepth(node) {
    if (node === null) return 0;
    let leftNode = this.maxDepth(node.left);
    let rightNode = this.maxDepth(node.right);

    return 1 + Math.max(leftNode, rightNode);
  }
}

function newNodes(data) {
  let node = new TreeNode(data);
  node.left = null;
  node.right = null;
  return node;
}

function man() {
  let root = newNodes(5);
  root.left = newNodes(2);
  root.right = newNodes(1);
  root.left.right = newNodes(10);
  root.right.left = newNodes(3);
  root.right.right = newNodes(4);
  root.right.left.left = newNodes(8);
  root.right.left.right = newNodes(11);

  let obj = new Solution();

  let result = obj.maxDepth(root);
  console.log(result);
}

man();


// Time Complexity: O(N) 

// Space Complexity: O(1) Extra Space + O(H) Recursion Stack space,
//  where “H”  is the height of the binary tree.
