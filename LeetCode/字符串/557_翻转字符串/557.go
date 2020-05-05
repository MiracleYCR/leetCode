package main

import (
	"fmt"
	"strings"
)

/**
	strings.split() ===> func Split(s, sep string) []string
	用去掉s中出现的sep的方式进行分割，会分割到结尾，并返回生成的所有片段组成的切片
	（每一个sep都会进行一次切割，即使两个sep相邻，也会进行两次切割）
	如果sep为空字符，Split会将s切分成每一个unicode码值一个字符串

	strings.join() ===> func Join(a []string, sep string) string
	将一系列字符串连接为一个字符串，之间用sep来分隔。
 */

func reverseWord (s string) string {
	var res []byte
	for i := len(s) - 1; i >= 0; i--  {
		res = append(res, s[i])
	}
	return string(res)
}

func reverseWords(s string) string {
	var result []string
	temp := strings.Split(s, " ")
	for _, v := range temp {
		result = append(result, reverseWord(v))
	}
	return strings.Join(result, " ")
}

func main() {
	str := "Let's take LeetCode contest"
	res := reverseWords(str)
	fmt.Println(res)
}
