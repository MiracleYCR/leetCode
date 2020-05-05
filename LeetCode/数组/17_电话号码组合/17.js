/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(!digits){
    return []
  }
  const letters = []
  const num = digits.split('')
  const digitArr = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

  const combine = (arr) => {
    if (arr.length < 2) {
      return arr[0].split('')
    }
    let temp = []
    for(let i = 0; i < arr[0].length; i++) {
      for(let j = 0; j < arr[1].length; j++) {
        temp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    arr.splice(0, 2, temp)
    if (arr.length > 1) {
      combine(arr)
    }
    return arr[0]
  }

  num.forEach(item => {
    if (digitArr[item]) {
      letters.push(digitArr[item])
    }
  })
  return combine(letters)
};


var letterCombinations_1 = function (digits) {
  const len = digits.length
  const digitArr = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  const temp = []
  for (let i = 0; i < len; i++) {
    digitArr[digits[i]].forEach(item => {
      
    })
  }
}


letterCombinations("234")