function compareArrays(arr1, arr2) {
  let result;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length === arr2.length && arr1.every(element => arr2.includes(element))) {
      result = true;
    } else result = false;
  }
  return result;
}

function advancedFilter(arr) {
  let resultArr = arr.filter(element => element > 0).filter(element => element % 3 == 0).map(element => element * 10);
  return resultArr;
}
