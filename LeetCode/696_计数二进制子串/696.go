package main

import (
	"fmt"
	"regexp"
	"strings"
)

func countBinarySubstrings(s string) int {
	var num int
	var byteSlice = []byte(s)
	for i := 0; i < len(byteSlice) - 1; i++ {
		var sub []byte = byteSlice[i:]
		var flag bool = matchSubStrings(sub)
		if flag {
			num += 1
		}
	}
	return num
}

func matchSubStrings(sub []byte) bool {
	reg, _ := regexp.Compile("^(0+|1+)")
	sub_1 := reg.FindAllString(string(sub), -1)
	sub_2 := strings.Repeat(string(int(sub_1[0][0]) ^ 1), len(sub_1[0]))
	matchSub := sub_1[0] + sub_2
	if string(sub[0:len(matchSub)]) ==  matchSub {
		return true
	}
	return false
}

func main() {
	count := countBinarySubstrings("00110011")
	fmt.Println(count)
}
