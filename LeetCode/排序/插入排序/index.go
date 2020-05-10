package main

import "fmt"

func insertionSort (arr []int) []int {
	if len(arr) <= 1 {
		return arr
	}

	// 插入排序需要从第二个元素开始考虑，第一个元素不需要再向前插入
	for i := 1; i < len(arr); i++ {
		temp := arr[i]
		var j int // j 就是当前元素 temp 应该插入的位置
		for j = i; j > 0 && arr[j-1] > temp; j-- {
			arr[j] = arr[j-1]
		}
		arr[j] = temp
	}
	return arr
}

func main() {
	var arr []int = []int{6, 5, 3, 2, 4, 7, 9, 1}
	var newArr []int = insertionSort(arr)
	fmt.Println(newArr)
}
