// Solution  [Recursive]:
// Approach: In postorder traversal, the tree is traversed in this way: left, right, root.

// The algorithm approach can be stated as:

// We first recursively visit the left child and go on left till we find a node pointing to NULL.
// Then we return to its parent.
// Then we recursively visit the right child.
// After we have returned from the right child as well, only then will we print the  current node value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function postOrderTrav(curr, postOrder) {
  if (curr === null) {
    return;
  }

  postOrderTrav(curr.left, postOrder);
  postOrderTrav(curr.right, postOrder);
  postOrder.push(curr.data);
}

function newNode(data) {
  const node = new Node(data);
  return node;
}

function main() {
  const root = newNode(1);
  root.left = newNode(2);
  root.right = newNode(3);
  root.left.left = newNode(4);
  root.left.right = newNode(5);
  root.left.right.left = newNode(8);
  root.right.left = newNode(6);
  root.right.right = newNode(7);
  root.right.right.left = newNode(9);
  root.right.right.right = newNode(10);

  const postOrder = [];
  postOrderTrav(root, postOrder);

  console.log("The postOrder Traversal is : " + postOrder.join(" "));
}

main();

// The postOrder Traversal is : 4 8 5 2 6 9 10 7 3 1

// Time Complexity: O(N).

// Reason: We are traversing N nodes and every node is visited exactly once.

// Space Complexity: O(N)

// Reason: Space is needed for the recursion stack.
// In the worst case (skewed tree), space complexity can be O(N).

//   Solution 2: Using a single stack:

//   Intuition: First we need to understand what we do in a postorder traversal. We first explore the left side of the root node and keep on moving left until we encounter a node pointing to NULL. As now there is nothing more to traverse on the left, we move to the immediate parent(say node P) of that NULL node. Now we again start our left exploration from the right child of that node P. We will print a node’s value only when we have returned from its both children.

//   Approach:

//   The algorithm steps can be stated as:

//   We take an explicit data structure and a cur pointer pointing to the root of the tree.
//   We run a while loop till the time the cur is not pointing to NULL or the stack is non-empty.
//   If cur is not pointing to NULL, it means then we simply push that value to the stack and move the cur pointer to its left child because we want to explore the left child before the root or the right child.
//   If the cur is pointing to NULL, it means we can’t go further left, then we take a variable temp and set it to  cur’s parent’s right child (as we have visited the left child, now we want to visit the right child). We have node cur’s parent at the top of the stack.
//   If node temp is not pointing to NULL, we simply initialise cur as node temp so that we can again start looking at the left of node temp from the next iteration.
//   If node temp is pointing to NULL, then first of all we are sure that we have visited both children of temp’s parent, so it’s time to print it. Therefore we set temp to its parent( present at the top of stack), pop the stack and then print temp’s value. Additionally,  this new temp(parent of NULL-pointing node) can be the right child of the node present at the top of stack after popping.In that case the node at top of the stack is parent of temp and the next node to be printed. Therefore we run an additional
//   while loop to check if that is the case, if true then again move temp to its parent and print its value.

class NodeStack {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function postOrderTravStack(currentNode) {
  let postOrder = [];
  if (currentNode === null) return postOrder;

  let stack = [];

  while (currentNode !== null || stack.length > 0) {
    if (currentNode !== null) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else {
      let temp = stack[stack.length - 1].right;

      if (temp === null) {
        temp = stack[stack.length - 1];
        stack.pop();
        postOrder.push(temp.data);
        while (stack.length !== 0 && temp === stack[stack.length - 1].right) {
          temp = stack[stack.length - 1];
          stack.pop();
          postOrder.push(temp.data);
        }
      } else {
        currentNode = temp;
      }
    }
  }

  return postOrder;
}

function newNodeStack(data) {
  const node = new NodeStack(data);
  return node;
}

function mainAde() {
  const rootstack = newNodeStack(1);
  rootstack.left = newNodeStack(2);
  rootstack.right = newNodeStack(3);
  rootstack.left.left = newNodeStack(4);
  rootstack.left.right = newNodeStack(5);
  rootstack.left.right.left = newNodeStack(8);
  rootstack.right.left = newNodeStack(6);
  rootstack.right.right = newNodeStack(7);
  rootstack.right.right.left = newNodeStack(9);
  rootstack.right.right.right = newNodeStack(10);

  const postOrder = postOrderTravStack(rootstack);

  console.log("The postOrder Traversal is : " + postOrder.join(" "));
}

mainAde();

// Time Complexity: O(2N).

// Space Complexity: O(N)
