function bubbleSort (arr) {
  if (arr.length <= 1) return arr
  
  // i 的值就是内部循环比较数值的边界
  for(let i = arr.length - 1; i > 0; i--) {
    let flag = false
    for(let j = 0; j < i; j++) {
      let temp = arr[j]
      if (arr[j] > arr[j+1]) {
        arr[j] = arr[j+1]
        arr[j+1] = temp
        flag = true
      }
    }
    if (!flag) {
      break
    }
  }
}

let arr = [6, 5, 3, 4, 2, 1, 8, 7, 9, 10, 0]
console.time("sort");
bubbleSort(arr)
console.timeEnd("sort");
console.log(arr);