/**
  给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
  示例:
    输入: "25525511135"
    输出: ["255.255.11.135", "255.255.111.35"]
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses_1 = function(s) {
  let res = []

  let recursion = (curArr, subStr) => {
    // 非法输入过滤
    if (subStr.length > 12) {
      return
    }

    if (curArr.length === 4 && curArr.join('') !== s) return
    // 边界条件
    if (curArr.length === 4 && curArr.join('') === s) {
      res.push(curArr.join('.'))
    } else {
      for(let i = 0, len = Math.min(3, subStr.length); i < len; i++) {
        let temp = subStr.slice(0, i+1)
        if (Number(temp) < 256) {
          recursion(curArr.concat([Number(temp)]), subStr.slice(i+1, subStr.length))
        }
      }
    }
  }

  recursion([], s)
  return res
};