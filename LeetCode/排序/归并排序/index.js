function mergeSort (arr) {
  const len = arr.length
  if (len <= 1) return arr
  const middle = len / 2
  const left_arr = arr.splice(0, middle)
  const right_arr = arr
  return merge(mergeSort(left_arr), mergeSort(right_arr))
}

function merge(left, right) {
  const result = []
  while(left.length > 0 && right.length > 0) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift())
  }
  return result.concat(left, right)
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.time('归并排序耗时');
console.log('arr :', mergeSort(arr));
console.timeEnd('归并排序耗时');