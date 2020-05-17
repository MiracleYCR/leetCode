var make = function(n) {
  if (n === 0) return ['0']
  if (n === 1) {
    return ['0', '1']
  } else {
    let prev = make(n - 1)
    let max = Math.pow(2, n) - 1
    let result = new Array(max)
    for (let i = 0; i < prev.length; i++) {
      result[i] = `0${prev[i]}`
      result[max-i] = `1${prev[i]}`
    }
    return result
  }
};

var grayCode = function(n) {
  let binaryArr = make(n)
  return binaryArr.map(item => {
    return parseInt(item, 2)
  })
};

console.log(grayCode(3));