'use strict';

const {BinaryTree, Node} = require('./Tree');
const tree = new BinaryTree();

const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');
const F = new Node('F');

tree.root = D;
D.left = B;
B.left = A;
B.right = C;
D.right = E;
E.right = F;

let stringBuilder = [];
tree.preOrder(tree.root, value => stringBuilder.push(value));
console.log(`Preorder result: ${stringBuilder.join(', ')}`);
stringBuilder = [];

tree.inOrder(tree.root, value => stringBuilder.push(value));
console.log(`Inorder result: ${stringBuilder.join(', ')}`);
stringBuilder = [];

tree.postOrder(tree.root, value => stringBuilder.push(value));
console.log(`Postorder result: ${stringBuilder.join(', ')}`);

stringBuilder = [];
