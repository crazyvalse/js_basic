/**
 * Created by codingnuts on 2018/6/4.
 */
// 使用 Mock
var Mock = require('mockjs')
var data = Mock.mock({
	// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
	'list|1-10': [{
		// 属性 id 是一个自增数，起始值为 1，每次增 1
		'id|+1': 1
	}]
})
// 输出结果
console.log(JSON.stringify(data, null, 4))


console.info(Mock.mock({
	"string|1-10": "★"
}))

var num = Mock.mock({
	"number|+1": 202
});

console.info(num, num, num)

console.info(Mock.mock({
	"object|2": {
		"310000": "上海市",
		"320000": "江苏省",
		"330000": "浙江省",
		"340000": "安徽省"
	}
}))

console.info(Mock.mock({
	"object|2-4": {
		"110000": "北京市",
		"120000": "天津市",
		"130000": "河北省",
		"140000": "山西省"
	}
}))
