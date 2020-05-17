/**
  在歌曲列表中，第 i 首歌曲的持续时间为 time[i] 秒。

  返回其总持续时间（以秒为单位）可被 60 整除的歌曲对的数量。形式上，我们希望索引的数字 i 和 j 满足  i < j 且有 (time[i] + time[j]) % 60 == 0。

  示例 1：

  输入：[30,20,150,100,40]
  输出：3
  解释：这三对的总持续时间可被 60 整数：
  (time[0] = 30, time[2] = 150): 总持续时间 180
  (time[1] = 20, time[3] = 100): 总持续时间 120
  (time[1] = 20, time[4] = 40): 总持续时间 60
  示例 2：

  输入：[60,60,60]
  输出：3
  解释：所有三对的总持续时间都是 120，可以被 60 整数。

  提示：

  1 <= time.length <= 60000
  1 <= time[i] <= 500
 */


// 暴力求解
var numPairsDivisibleBy60 = function(time) {
  if (time.length <= 1) return 0
  let counter = 0
  for(let i = 0; i < time.length; i++) {
      for(let j = i + 1; j < time.length; j++) {
          if ((time[i] + time[j]) % 60 === 0) {
              counter += 1
          }
      }
  }
  return counter
};


// 哈希表方法
var numPairsDivisibleBy60 = function(time) {
  if (time.length <= 1) return 0;
  let counter = 0;
  let hashTable = new Array(60);

  // 对 60s 取模的值在 0 - 59 之间
  for(let i = 0; i < 60; i++) {
    // 将每一个模的值都存储在对应的下标的数组中
    // 初始每一个模数的个数都是 0
    hashTable[i] = 0;
  }

  // 对 time 数组中的每一个元素对 60 取模, 取的模数时，就对 hash 表中对应的模数的个数加一
  for(let j = 0; j < time.length; j++) {
    hashTable[time[j] % 60]++
  }

  // 对模数为 0 和 30 的元素需要特殊处理
  /**
    例如 [60, 60, 60, 60]
    此时的任意两个元素的和取模都是 0
    所以 [60, 60, 60, 60] 有  (4x3)/2 中元素对 ==> 120 % 60 = 0

    [30, 30, 30, 30] 有  (4x3)/2 中元素对 ==> 60 % 60 = 0
   */
  counter += hashTable[0] * (hashTable[0] - 1) / 2
  counter += hashTable[30] * (hashTable[30] - 1) / 2

  // 在对 1-30 之间进行模数的遍历
  // a1, a2 对应 k
  // b1, b2 对应 60 - k
  // 此时有四种组合方式： a1-b1, a1-b2, a2-b1, a2-b2
  for(let k = 1; k < 30; k++) {
    counter += hashTable[k] * hashTable[60-k]
  }

  return counter
};