const length = 9;
const input = [
  [0,1,4],
  [1,2,3],
  [2,-1,-1],
  [3,-1,-1],
  [4,5,8],
  [5,6,7],
  [6,-1,-1],
  [7,-1,-1],
  [8,-1,-1],
];
const height = [];
const tree = [];
const degree = [];
const depth = [];


const calcHeight = u => {
  let h1 = h2 = 0;

  if(tree[u].right !== -1) {
    h1 = calcHeight(tree[u].right) + 1;
  }

  if(tree[u].left !== -1) {
    h2 = calcHeight(tree[u].left) + 1;
  }
  return height[u] = Math.max(h1, h2);
}


const calcDepth = (u, p) => {
  if(u === -1) {
    return;
  }
  depth[u] = p;
  calcDepth(tree[u].left, p + 1);
  calcDepth(tree[u].right, p + 1);
}


const binaryTree = (length, input) => {
  for(let i = 0; i < length; i++){
    tree[i] = {
      left: "",
      right: "",
      parent: "",  
    };
  }

  for(let i = 0; i < length; i++) {
    if(i === 0) {
      tree[i].parent = -1;
    }

    if(input[i][1] !== -1) {
      tree[input[i][1]].parent = input[i][0];
    }

    if(input[i][2] !== -1) {
      tree[input[i][2]].parent = input[i][0];
    }

    tree[i].left = input[i][1];
    tree[i].right = input[i][2];
  }

  return tree;
}

const main = (length, input) => {
  console.log(binaryTree(length, input));
  console.log(calcHeight(0));
  console.log(calcDepth(0, 0));
}

main(length, input);