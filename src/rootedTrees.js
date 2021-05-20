const length = 13;
const node = [
  [0,3,1,4,10],
  [1,2,2,3],
  [2,0],
  [3.0],
  [4,3,5,6,7],
  [5,0],
  [6,0],
  [7,2,8,9],
  [8,0],
  [9,0],
  [10,2,11,12],
  [11,0],
  [12,0]
]

const main = (length, node) => {
  const T = [];

  for(let i = 0; i < length; i++) {
    T[i].node = node[i][1];
    for(let j = 0; j <= node[i].length - 2; j++ ) {
      if((node[i].length - 2) === 0) {
        T[i].left = "";
      }

      if(node[i].length - 2 !== 0  && (j !== (node[i].length - 2))) {

      }

      T[j + 2].parent = node[i][0];
    }
  }
}