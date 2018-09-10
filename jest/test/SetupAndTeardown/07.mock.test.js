/**
 * Created by codingnuts on 2018/9/6.
 */

function forEach (items, callback) {
	for (let index = 0; index < items.length; index++) {
		callback(items[index], 33);
	}
}

test('The mock function', () => {
	const mockCallback = jest.fn();
	forEach([11, 22], mockCallback);
	console.info(mockCallback.mock.calls)
	// The mock function is called twice
	expect(mockCallback.mock.calls.length).toBe(2);

	// The first argument of the first call to the function was 0
	expect(mockCallback.mock.calls[0][0]).toBe(11);

	// The first argument of the second call to the function was 1
	expect(mockCallback.mock.calls[1][0]).toBe(22);

	// The return value of the first call to the function was 42
	console.info("------------", mockCallback.mock.results[0].value)
	//expect(mockCallback.mock.results[0].value).toBe(42);
});


