const length = 8;
let A = [3,5,2,1,4,1,8,7];


const merge = (A, left, mid, right) => {
  const L = [];
  const R = [];
  const n1 = mid - left;
  const n2 = right - mid;
  let i,j,k;
  let cnt;

  for(i = 0; i < n1; i++) {
    L[i] = A[left + i];
  }

  for(i = 0; i < n2; i++) {
    R[i] = A[mid + i];
  }

  L[n1] = R[n2] = 10000;
  i = j = 0;

  for(k = left; k < right; k++) {
    if(L[i] <= R[j]) {
      A[k] = L[i++];
    } else {
      A[k] = R[j++];
      cnt += n1 - i;
    }
  }

  return cnt;
}

const mergeSort = (A, left, right) => {
  let mid;
  let v1,v2,v3;
  console.log(mid);
  if(left + 1 < right && !isNaN(mid)) {
    v1 = mergeSort(A, left, mid);
    v2 = mergeSort(A, mid, right);
    v3 = merge(A, left, mid, right);
    // console.log(v3);
    return v1 + v2 + v3;
  } else {
    return 0;
  }
}


console.log(mergeSort(A, 0, length-1));