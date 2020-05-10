package main

import "fmt"

// 选择排序，从小到大进行排序
func selectionSort (arr []int) []int {
	if len(arr) <= 1 {
		return arr
	}

	for i := 0; i < len(arr); i++ {
		// 寻找 [i, arr_len) 区间的最小值
		// 初始时最小值的下标位置， 默认 0 开始
		minIndex := i
		for j := i + 1; j < len(arr) ; j++ {
			if arr[j] < arr[minIndex] {
				minIndex = j
			}
		}
		arr[i], arr[minIndex] = arr[minIndex], arr[i]
	}

	return arr
}

func main() {
	var arr []int = []int{6, 5, 3, 2, 4, 7, 9, 1}
	var newArr []int = selectionSort(arr)
	fmt.Println(newArr)
}
