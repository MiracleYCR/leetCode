function insertionSort(arr) {
    if (arr.length <= 1) return arr

    // 从第二个元素开始向前插入元素
    for (let i = 1; i < arr.length; i++) {
        // 缓存当前元素
        let temp = arr[i]
        let j
        for (j = i; j > 0; j--) {
            if (arr[j-1] > temp) {
                arr[j] = arr[j-1]
            } else {
                break
            }
        }

        arr[j] = temp
    }

    return arr
}

let arr = [6, 5, 3, 2, 4, 7, 9, 1]
console.time("insertion sort")
let newArr = insertionSort(arr)
console.timeEnd("insertion sort")
console.log(newArr)