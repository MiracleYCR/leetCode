/**
  给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

  说明:

  初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
  你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

  示例:

  输入:
  nums1 = [1,2,3,0,0,0], m = 3
  nums2 = [2,5,6],       n = 3

  输出: [1,2,2,3,5,6]
 */

var merge = function(nums1, m, nums2, n) {
  let index1 = m - 1;
  let index2 = n - 1;
  let result = []

  for(let i = m + n - 1; i >= 0 ; i--) {
      result[i] = nums1[index1] <= nums2[index2] ? nums2[index2--] : nums1[index1--]
  }
  return result
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3)


// 三指针法
var merge = function(nums1, m, nums2, n) {
  let index1 = m - 1
  let index2 = n - 1
  let curIndex = m + n - 1
  while(index2 + 1 > 0) {
      if (index1 < 0) {
          nums1[curIndex--] = nums2[index2--]
          continue
      }
      nums1[curIndex--] = nums1[index1] >= nums2[index2] ? nums1[index1--] : nums2[index2--]
  }
};