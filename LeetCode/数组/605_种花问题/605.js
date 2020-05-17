var canPlaceFlowers = function(flowerbed, n) {
  let len = flowerbed.length;
  let result = 0;

  // index_arr 用于存储 flowerbed 中元素为 1 位置的下标
  let index_arr = [];
  // 表示 flowerbed 是否全是 0 的状态
  let noOne = true

  // 特殊情况一： flowerbed = [0]
  if (len === 1 && flowerbed[0] === 0) return true

  for(let i = 0; i < len; i++) {
    if (flowerbed[i] === 1) {
      index_arr.push(i);
      noOne = false
    }
  }

  // 如果 flowerbed 的元素全部为 0
  if (noOne) {
    result += (len + 1) >> 1
  } else {
    // flowerbed 的首元素是以 0 开始 ==>  [0, 0, 0, 1.....]
    if (index_arr[0] !== 0) {
      result += index_arr[0] >> 1;
    }
    // flowerbed 的尾元素是以 0 结尾 ===> [...1, 0, 1, 0, 0, 0]
    if (index_arr[index_arr.length - 1] !== len - 1) {
      result += ((len - 1) - index_arr[index_arr.length - 1]) >> 1
    }
    if (index_arr.length > 1) {
      for(let j = 0; j < index_arr.length - 1; j++) {
        // 获取 flowerbed 中两个相邻元素 1 之间有多少个 0
        let zeroNum = index_arr[j+1] - index_arr[j] - 1;
        result += (zeroNum - 1) >> 1
      }
    }
  }
  return result >= n
};

var canPlaceFlowers_1 = function (flowerbed, n) {
  var num = 0
  for (var i = 0, length = flowerbed.length; i < length; i++) {
    if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
      num++
      i++
    }
  }
  return n <= num
}

canPlaceFlowers([1,0,0,0,1], 2)