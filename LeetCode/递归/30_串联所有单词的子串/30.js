/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

/**
 *  [A, B, C]
 */


var findSubstring = function(s, words) {
  let num = words.length
  let result = []
  let recursion = (cur, arr) => {
    if (cur.length === num) {
      result.push(cur)
    } else {
      arr.forEach((item, index) => {
        let temp = [].concat(arr)
        temp.splice(index, 1)
        recursion(cur.concat([item]), temp)
      })
    }
  }

  recursion([], words)

  let arr_list = result.map(item => {
    return s.indexOf(item.join(''))
  })

  arr_list
};