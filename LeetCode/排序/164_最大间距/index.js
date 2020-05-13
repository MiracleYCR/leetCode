/**
  给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。

  如果数组元素个数小于 2，则返回 0。

  示例 1:

  输入: [3,6,9,1]
  输出: 3
  解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。
  示例 2:

  输入: [10]
  输出: 0
  解释: 数组元素个数小于 2，因此返回 0。
  说明:

  你可以假设数组中所有元素都是非负整数，且数值在 32 位有符号整数范围内。
  请尝试在线性时间复杂度和空间复杂度的条件下解决此问题。
 */

var maximumGap_1 = function(nums) {
  let len = nums.length

  if (len <= 1) return 0

  nums.sort((a, b) => a - b)
  
  let maxGap = 0
  for(let i = 0; i < len - 1; i++) {
      let gap = nums[i+1] - nums[i]
      if (gap > maxGap) {
          maxGap = gap
      }
  }
  return maxGap
};

console.log(maximumGap([1,3,100]));

// 冒泡排序
var maximumGap_2 = function(nums) {
  let len = nums.length

  if (len <= 1) return 0

  if (len === 2) {
    return nums[1] - nums[0] > 0 ? nums[1] - nums[0] : nums[0] - nums[1]
  }

  let maxGap = 0
  let gap = 0

  for(let i = len - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j+1]) {
        let temp = nums[j]
        nums[j] = nums[j+1]
        nums[j+1] = temp
      }
    }
    if (i < len - 1) {
      gap = nums[i + 1] - nums[i]
      gap > maxGap && (maxGap = gap)
    }
  }
  return maxGap
};