/**
 * Created by codingnuts on 2018/4/18.
 */

var arr = [
	"a",
	{
		b: "B",
		c: "c"
	},
	1
];

console.info(arr.length);


var arr2 = arr.slice();

console.info(arr2.valueOf());

arr2[1].b = 666;
console.info(arr2.valueOf());
console.info(arr.valueOf());

var arr3 = JSON.parse(JSON.stringify(arr));
console.info(arr3);
arr3[1].b = 777;
console.info(arr.valueOf());
console.info(arr2.valueOf());
console.info(arr3.valueOf());

