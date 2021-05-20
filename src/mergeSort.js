// let arrayA = [8,5,9,2,6,3,7,1,10,4];
let arrayA = [8,5,9,2];
const length = 4;
const L = [];
const R = [];

const merge = (A, left, mid, right) => {
  let n1 = mid - left;
  let n2 = right - mid;
  let i,j,k;

  for(i = 0; i < n1; i++) {
    L[i] = A[left + i];
  }

  for(i = 0; i < n2; i++) {
    R[i] = A[mid + i];
  }

  L[n1] = 1000;
  L[n1] = 1000;
  i,j = 0;

  for(k = left; k < right; k++) {
    if(L[i] <= R[j]) {
      A[k] = L[i];
      i++;
    } else {
      A[k] = R[j];
      j++;
    }
  }
}

const mergeSort = (A, left, right) => {
  if(left + 1 < right) {
    mid = Math.floor((left + right) / 2);
    mergeSort(A, left, mid);
    mergeSort(A, mid, right);
    merge(A, left, mid, right);
  }

  return A;
}

console.log(mergeSort(arrayA, 0, length));