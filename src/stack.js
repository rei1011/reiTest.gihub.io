const iniArray = ["10","2","+","3","4","-","*"];

const push = (stack,x) => {
  stack.push(x);
}

const pop = (stack) => {
  return stack.pop();
}

const calc = (x,y,ope) => {
  switch(ope) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    default:
      break;
  }
}

const isOpe = x => {
  if(x === "+" || x === "*" || x === "-") {
    return true;
  }

  return false;
}


const stackFunc = array => {
  const resultStack = [];
  array.forEach(ele => {
    if(isOpe(ele)) {
      const num2 = parseInt(pop(resultStack), 10);
      const num1 = parseInt(pop(resultStack), 10);
      const calcResult = calc(num1,num2,ele);
      push(resultStack, calcResult);
    } else {
      push(resultStack, ele);
    }
  })

  return resultStack[0];
}

console.log(stackFunc(iniArray));