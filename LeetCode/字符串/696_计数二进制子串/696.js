/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let res = []

  // 匹配子串
  let match = (str) => {

    // 从头开始匹配 多个 0 或者 多个 1
    let j = str.match(/^(0+|1+)/)[0]
    // 再根据 多个 0 或者 多个 1 来创建符合条件的 子串
    // 例如 j = 000 ===> j$ = 111
    let j$ = (j[0] ^ 1).toString().repeat(j.length)

    // 正则匹配
    let reg = new RegExp(`^(${j}${j$})`)
    if (reg.test(str)) {
      return RegExp.$1
    } else {
      return ''
    }

    // let matchSub = j + j$
    // let subStr = str.slice(0, matchSub.length)
    // if (subStr === matchSub) {
    //   return matchSub
    // } else {
    //   return ''
    // }
    
  }

  for (let i = 0; i < s.length - 1; i++) {
    let sub = match(s.slice(i))
    if (sub) {
      res.push(sub)
    }
  }
  return res.length
};

let result = countBinarySubstrings("00110011")
console.log(result);