// Vertical Order Traversal of Binary Tree
// Problem Statement: Vertical Order Traversal Of A Binary Tree. Write a program for Vertical Order Traversal order of a Binary Tree.

// Example:

// Problem Description:

// Vertical Order Traversal, as the name suggests is a traversal in which we divide the binary tree in verticals from left to right, and in every vertical, we print the nodes from top to bottom.

// Note:

// There can be duplicate values among the nodes (here 10 is repeated twice).
// If two or more nodes are overlapping at the same position(here 10 and 9), then they will be printed in ascending order.
// Solution :
// Disclaimer: Don’t jump directly to the solution, try it out yourself first.

// Intuition: First of all, we need to assign a vertical and a level to every node. Once we assign them, we need to figure out a suitable data structure to store them. This data structure should give us the nodes with left-side vertical first and in every vertical, top-level node should appear first.

// Approach:

// We will perform a tree traversal and assign a vertical and level to every node. Based on this vertical and node, we store the node in our special data structure. For easy understanding, we break it into these steps:

// Step-1: Assigning vertical and level to every node

// We can perform any tree traversal for this step. Here we are taking the example of level order traversal. In the initial step when we push the node to our queue, we will push two more variables to it, one for the vertical and one for the level (both initialized as zero). Now whenever we push the left child of the node, we decrease vertical by 1 and increase level by 1, whereas whenever we push the right child of the node, we increase both vertical and level by one.

// Verticals and levels will be marked as follows:

// Step-2: Storing Verticals and levels to our data structure

// When we are assigning the verticals and levels, it is very important to store them in a suitable data structure. After assigning we have:

// In the vertical order traversal, we need to print the nodes of the left vertical first, therefore in our example, nodes of -2 vertical will be the first to  be printed. Therefore, we need a data structure that can store nodes according to their vertical value and give us the nodes of least values first. Hence we will use a map as it satisfies both criterias.

// Now, we will explore X. In a single vertical we want to get the nodes by their levels. In our example, vertical 0 has nodes of three different levels, we will print level 0 first (node 1), then level 2 (node 9 and 10) and at last level 4 (node 6). Therefore as in the case of our verticals, we will again use map to store nodes level-wise inside the vertical. So, our data structure will become:

// Now, we will explore Y. There can be a case that two or more nodes overlap at the same vertical and level, as with case of node 9 and node 10 at vertical 0 and level 2. In such a case we will print nodes with lesser value first. Therefore for every level, we need a data-structure which can store node values in a sorted order. Moreover, as duplicate values are allowed in our tree, our data structure needs to handle this well. This is acheived by using multiset in C++. Multiset is similar to a set which keeps elements in sorted order but also allows duplicates. In Java, we can use priority queues as it gives us the minimum value at the top.

// Therefore, our final data structure will be:

// Note: This is not the only choice for the data structure. You are free to choose any other data structure as well but the requirements remain the same. Instead of a multiset/priority queue, simple lists can also be used but then we will need to sort them in our last step.

// Step 3: Printing vertical order traversal from our data structure

// In the last step, we iterate over our verticals by using the data structure of step 2. In every iteration, we take a list(to store all nodes of that vertical) and again iterate over the levels. We then push the nodes of the level (stored in the multiset/priority queue) and push it to our vertical list. Once we iterate over all verticals we get our vertical order traversal.

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function newNode(data) {
  const node = new TreeNode(data);
  node.left = null;
  node.right = null;
  return node;
}

function findVertical(root) {
  let nodes = new Map(); //// Map to store vertical and level data
  let queue = [[root, [0, 0]]]; // Initial vertical and level

  while (queue.length > 0) {
    const [temp, [x, y]] = queue.shift();

    if (!nodes.has(x)) {
      nodes.set(x, new Map());
    }

    if (!nodes.get(x).has(y)) {
      //nodes.get(x).set(y, []); // Nodes can be on the same vertical but different levels
      nodes.get(x).set(y, new Set()); // Nodes can be on the same vertical but different levels
    }

    // Now, updates the nodes map by adding the node's data to the corresponding vertical and horizontal level.
    nodes.get(x).get(y).add(temp.data);
    // nodes.get(x).get(y).push(temp.data);
    // enqueues the left and right children with updated positions.
    console.log(nodes);
    if (temp.left) {
      queue.push([temp.left, [x - 1, y + 1]]);
    }

    if (temp.right) {
      queue.push([temp.right, [x + 1, y + 1]]);
    }
  }

  const result = [];

  for (let [x, levelMap] of nodes) {
    let col = [];

    for (let [y, nodeSet] of levelMap) {
      col.push(...Array.from(nodeSet).sort((a, b) => a - b));
      //col.push(...nodeSet.sort((a, b) => a - b));
    }
    result.push(col);
  }
  return result;
}

function main() {
  const root = newNode(1);
  // Constructing a binary tree
  root.left = newNode(2);
  root.left.left = newNode(4);
  root.left.right = newNode(10);
  root.left.left.right = newNode(5);
  root.left.left.right.right = newNode(6);
  root.right = newNode(3);
  root.right.left = newNode(9);
  root.right.right = newNode(10);

  // Calling findVertical to get the vertical traversal
  const verticalTraversal = findVertical(root);

  // Displaying the result
  console.log("The Vertical Traversal is : ");
  for (const vertical of verticalTraversal) {
    console.log(vertical.join(" "));
  }
}

main();

//The time Complexity is (Addition of LogN)—> O((LogN + LogN + LogN) * N)
//Space Complexity: O(N)
