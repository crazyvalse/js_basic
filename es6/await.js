/**
 * Created by codingnuts on 2018/9/4.
 */
async function f () {
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve('done!'), 5000)
	})
	let result = await promise // 直到promise返回一个resolve值（*）
	console.info(result) // 'done!'
}
f()

