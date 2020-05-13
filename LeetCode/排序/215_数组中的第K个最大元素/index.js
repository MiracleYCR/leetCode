/**
 * 215. 数组中的第K个最大元素

  示例 1:
  输入: [3,2,1,5,6,4] 和 k = 2
  输出: 5

  示例 2:
  输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
  输出: 4

  说明:
  你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

 */

// js 内置函数排序
var findKthLargest_1 = function(nums, k) {
  var arr = nums.sort((a, b) => b - a)
  return arr[k - 1]
};

findKthLargest([3,2,3,1,2,4,5,5,6], 4)

// 冒泡排序
function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

var findKthLargest_2 = function(nums, k) {
  let len = nums.length
  for(let i = len - 1; i > len - k - 1; i--) {
    for(let j = 0; j < i; j++) {
      if (nums[j] > nums[j+1]) {
        swap(nums, j, j + 1)
      }
    }
  }
  return nums[len - k]
}

