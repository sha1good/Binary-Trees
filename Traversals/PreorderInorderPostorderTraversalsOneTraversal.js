// Problem Statement: Preorder Inorder Postorder Traversals in One Traversal. Write a program to print Preorder, Inorder, and Postorder traversal of the tree in a single traversal.

// Example:

//Solution :
//Intuition: If we study the preorder, inorder and postorder traversals, we will observe a pattern. To understand this pattern, we take a simple example:

//The number inside the red boxes is the visit when we print the node. In preorder traversal, we print a node at the first visit itself. Whereas, in inorder traversal at the first visit to a node, we simply traverse to the left child. It is only when we return from the left child and visit that node the second time, that we print it. Similarly, in postorder traversal, we print a node in its third visit after visiting both its children.

// Approach:

// The algorithm steps can be described as follows:

// We take a stack data structure and push a pair<val, num> to it. Here Val is the value of the root node and num the visit to the node. Initially, the num is 1 as we are visiting the root node for the first time. We also create three separate lists for preorder, inorder and postorder traversals. Then we set an iterative loop to run till the time our stack is non-empty.

// In every iteration, we pop the top of the stack (say, T). Then we check the second value(num) of T. Three cases can arise:

// Case 1 : When num==1
// This means that we are visiting the node for the very first time, therefore we push the node value to our preorder list. Then we push the same node with num=2(for Case 2). After this, we want to visit the left child. Therefore we make a new pair Y(<val, num>) and push it to the stack (if there exists a left child). The val of Y is equal to the left child’s node value and num is equal to 1.

// Case 2 : When num==2
// This means that we are visiting the node for the second time, therefore on our second visit to the node, we push the node value to our inorder list. Then we push the same node with num=3( for Case 3). After this, we want to visit the right child. Therefore as in the first case, we check if there exists a right child or not. If there is, we push the right child and num value=1 as a pair to our stack.

// Case 3 When num==3
// This means that we are visiting the node for the third time. Therefore we will push that node’s value to our postorder list.
//Next, we simply want to return to the parent so we will not push anything else to the stack.
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function newNode(data) {
  const node = new Node(data);
  return node;
}

function allTraversals(root, preOrder, inOrder, postOrder) {
  let stack = [];
  stack.push([root, 1]);

  if (root === null) return;
  while (stack.length > 0) {
    let [node, state] = stack.pop();

    // this is part of pre
    // increment 1 to 2
    // push the left side of the tree
    if (state === 1) {
      preOrder.push(node.data);
      stack.push([node, 2]);

      if (node.left !== null) {
        stack.push([node.left, 1]);
      }
    }
    // this is a part of in
    // increment 2 to 3
    // push right
    else if (state === 2) {
      inOrder.push(node.data);
      stack.push([node, 3]);
      if (node.right !== null) {
        stack.push([node.right, 1]);
      }
    } else {
      postOrder.push(node.data);
    }
  }
}
function main() {
  const root = newNode(1);
  root.left = newNode(2);
  root.left.left = newNode(4);
  root.left.right = newNode(5);
  root.right = newNode(3);
  root.right.left = newNode(6);
  root.right.right = newNode(7);
  const preOrder = [];
  const inOrder = [];
  const postOrder = [];

  allTraversals(root, preOrder, inOrder, postOrder);

  console.log("The preorder Traversal is : " + preOrder.join(" "));
  console.log("The inorder Traversal is : " + inOrder.join(" "));
  console.log("The postorder Traversal is : " + postOrder.join(" "));
}

main();
