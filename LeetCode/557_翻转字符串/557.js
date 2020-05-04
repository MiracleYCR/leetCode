/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  var arr = s.split(' ')
  var res = arr.map(item => {
      return item.split('').reverse().join('')
  })
  return res.join(' ')
};

// 对上面的代码进行优化
var reverseWords_1 = function(s) {
    return s.split(' ').map(item => {
        return item.split('').reverse().join('')
    }).join(' ')
};