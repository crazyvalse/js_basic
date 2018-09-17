/**
 * Created by codingnuts on 2018/9/4.
 */

async function fetchData(){
	/*let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve('peanut butter'), 5000)
	})
	let result = await promise // 直到promise返回一个resolve值（*）*/
	return "peanut butter"; //result;
}

test('the data is peanut butter', () => {
	expect.assertions(1);
	return fetchData().then(data => {
		expect(data).toBe('peanut butter');
	});
});

