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
]

const preOrder = (u) => {
  if(u !== -1) {
    console.log(input[u][0]);
    preOrder(input[u][1]);
    preOrder(input[u][2]);
  }
}

const inOrder = u => {
  if(u == -1) {
    return;
  }
  inOrder(input[u][1]);
  console.log(u);
  inOrder(input[u][2]);
}

console.log(inOrder(0));