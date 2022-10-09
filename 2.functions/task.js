// Задание 1
function getArrayParams(arr) {
  let min = arr[1];
  let max = arr[1];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  let avg = parseInt((sum/arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr [i];
  }
  return sum;
}

function makeWork(arrOfArr, worker) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    if (worker(arrOfArr[i]) > max) {
      max = worker(arrOfArr[i]);
    }
  }
  return max;
}


// Задание 3
function worker2(arr) {
  let max = arr[1];
  let min = arr[1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i < min]) {
      min = arr[i];
    }
  }
  let diff = Math.abs(max - min);
  return diff;
}
