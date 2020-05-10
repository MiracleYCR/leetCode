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

let arr = [6, 5, 3, 4, 2, 1, 8, 7, 9, 5, 7, 10, 0]
console.time("sort");
let newArr = quickSort(arr)
console.timeEnd("sort");
console.log(newArr);
