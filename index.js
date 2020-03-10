const Tree = require('./Tree');

let root = new Tree();
  
function insert(tree, value) {
  if (tree.value) {
    if (value > tree.value) {
      insert(tree.right, value);
    } else {
      insert(tree.left, value);
    }
  } else {
    tree.value = value;
    tree.right = {};
    tree.left = {};
  }
}

insert(root, 20);
insert(root, 18);
insert(root, 22);
insert(root, 24);
insert(root, 17);

console.log(root);
