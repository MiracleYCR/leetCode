/**
  给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

  说明：

  你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

  示例 1:

  输入: [2,2,1]
  输出: 1
  示例 2:

  输入: [4,1,2,1,2]
  输出: 4
 */

// 先排序，在比较
var singleNumber = function(nums) {
  let len = nums.length
  nums.sort((a, b) => a - b)
  for (let i = 0; i< len; i += 2){
    if (nums[i] != nums[i+1]) {
      return nums[i]
    }
  }
};

// 使用位运算符 异或 ^

/**
  例如 [4, 1, 1, 2, 2]

  4 => 0100
  1 => 0001

  4 ^ 1 => 0101 ===> 5
  4 ^ 1 ^ 1 => 5 ^ 1 => 0101 ^ 0001 => 0100 = 4

  所以 4 ^ 1 ^ 1 ^ 2 ^ 2 = 4
 */

var singleNumber_1 = (nums) => {
  let res = nums[0]
  for (let i = 1; i < nums.length; i++) {
    res = res ^ nums[i]
  }
  return res
}