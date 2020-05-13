const biaryFind = (arr, target) => {
  if (arr.length <= 0) return -1

  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    const mid = (low + high) >> 1
    if (target === arr[mid]) {
      return mid
    } else if (target > arr[mid]) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return -1
}

const arr = [1, 4, 5, 6, 7, 8, 10, 11, 23, 42, 44, 54, 56, 77, 102]
console.log(biaryFind(arr, 44))
console.log(biaryFind(arr, 1))
console.log(biaryFind(arr, 102))
console.log(biaryFind(arr, 1111))