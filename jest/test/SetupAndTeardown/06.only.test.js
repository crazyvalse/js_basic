/**
 * Created by codingnuts on 2018/9/6.
 */

test.only('this will be the only test that runs', () => {
	//expect(true).toBe(false);
});

test('this test will not run', () => {
	expect('A').toBe('A');
});