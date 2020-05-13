function quickSort (arr) {
  let len = arr.length
  if (len < 2) {
    return arr
  } else {
    let flag = arr[0]
    let left = []
    let right = []
    for(let i = 1; i < len; i++) {
      if (flag > arr[i]) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return quickSort(left).concat(flag, quickSort(right))
  }
}

function quickSort2 (arr, start = 0, end = arr.length - 1) {
  if (start >= end) return
  const pivot = partition(arr, start, end)
  quickSort2(arr, start, pivot - 1)
  quickSort2(arr, pivot + 1, end)
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function partition(arr, start, end) {
  let pivot = end, counter = start
  for(let i = start; i < end; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, counter)
      counter++
    }
  }
  swap(arr, pivot, counter)
  return counter
}

var arr = [5, 1, 3, 6, 4]
quickSort2(arr)
console.log(arr);
