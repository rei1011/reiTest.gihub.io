const numA = 5;
const arrayA = [1,5,7,10,21];
const numQ = 4;
const arrayQ = [2,4,17,8]

const solve = (ite, m) => {
  let res;

  if(m === 0) return true;
  if(ite >= numA) return false;

  res = solve(ite + 1, m) || solve(ite + 1, m - arrayA[ite]);
  return res;
}

const main = () => {
  const resultArray = [];
  for(let i = 0; i < numQ; i++) {
    if(solve(0, arrayQ[i])) {
      resultArray.push("yes");
    } else {
      resultArray.push("no");
    }
  }

  return resultArray;
}

console.log(main());