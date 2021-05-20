const cardNum = 5;
const cardArray =["H4","C9","S4","D2","C3"];


const bubble = (array, length) => {
  const tempArray = array.concat();
  for(let i = 0; i <= length - 1; i++) {
    for(let j = length - 1; j >= i + 1 ; j--) {
      if(tempArray[j].value.slice(1) < tempArray[j-1].value.slice(1)) {
        const card = tempArray[j];
        tempArray[j] = tempArray[j-1];
        tempArray[j-1] = card;
      }
    }
  }
  return tempArray;
}


const selectionSort = (array, length) => {
  let tempArray = array.concat();
  for(let i = 0; i < length; i++) {
    let minj = i;
    
    for(let j = i; j < length; j++) {
      if(Number(tempArray[j].value.slice(1)) < Number(tempArray[minj].value.slice(1))) {
        minj = j;
      }
    }
    const card = tempArray[i];
    tempArray[i] = tempArray[minj];
    tempArray[minj] = card;
  }
  return tempArray;
}


const addIndex = array => {
  const arrayWithInitalIndex = [];
  array.forEach((ele,index) => {
    const eleWithInitalIndex = {};
    eleWithInitalIndex.value = ele;
    eleWithInitalIndex.initalIndex = index;
    arrayWithInitalIndex[index] = eleWithInitalIndex;
  })
  
  return arrayWithInitalIndex;
}

const isStable = (array,length) => {
  for(let i = 0; i < length -1; i++) {
    
    if(array[i].value.slice(1) === array[i+1].value.slice(1)
       && array[i].initalIndex > array[i+1].initalIndex) {
      return "Not stable";
      break;
    }
  }
  
  return "Stable";
}


const showResult = (array, length) => {
  const startTime = Date.now();
  const arrayWithInitalIndex = addIndex(array, length);
  
  const bubbleArray = bubble(arrayWithInitalIndex, length);
  console.log(bubbleArray);
  const bubbleArrayIsStable = isStable(bubbleArray, length);
  console.log(bubbleArrayIsStable);
  
  const selectionSortArray = selectionSort(arrayWithInitalIndex, length);
  console.log(selectionSortArray);
  const selectionSortArrayIsStable = isStable(selectionSortArray, length);
  console.log(selectionSortArrayIsStable);
  const endTime = Date.now();
  console.log(endTime - startTime);
}

console.log(showResult(cardArray, cardNum));