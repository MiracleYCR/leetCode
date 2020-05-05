// 计算 a b 两个数的最大公约数
var gcd = (a, b) => {
  if (b === 0) {
    return a
  } else {
    return gcd(b, a % b)
  }
}

console.log(gcd(6, 9))
console.log(gcd(4, 12))
console.log(gcd(15, 25))
console.log(gcd(3, 2))
console.log(gcd(1, 6))

var hasGroupsSizeX = function(deck) {

};