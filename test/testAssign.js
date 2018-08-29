/**
 * Created by codingnuts on 2017/12/25.
 */
var a = {
	aa: "aa"
};
var b = {
	bb: "bb",
	cc: {
		dd: 1,
		ee: 2
	}
};

console.info(Object.assign({}, b, {
	cc: {
		dd:333
	}
}))