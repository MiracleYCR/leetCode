// 循环遍历数组，取出最小值，放置在数组头部
function selectionSort(arr) {
    if (arr.length <= 1) return arr

    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

let arr = [6, 5, 3, 2, 4, 7, 9, 1]
console.time("selection sort")
let newArr = selectionSort(arr)
console.timeEnd("selection sort")
console.log(newArr)


