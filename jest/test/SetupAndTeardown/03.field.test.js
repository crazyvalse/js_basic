/**
 * Created by codingnuts on 2018/9/6.
 */

beforeAll(() => {
	console.info("start")
});

afterAll(() => {
	console.info("end")
});

test('city database has Vienna', () => {
	expect(true).toBeTruthy();
});

test('city database has San Juan', () => {
	expect(true).toBeTruthy();
});


test('city database has San Juan', () => {
	expect(true).toBeTruthy();
});

describe('matching cities to foods', () => {
	beforeEach(() => {
		console.info("start")
	});

	afterEach(() => {
		console.info("end")
	});

	test('city database has Vienna', () => {
		expect(true).toBeTruthy();
	});

	test('city database has San Juan', () => {
		expect(true).toBeTruthy();
	});
});