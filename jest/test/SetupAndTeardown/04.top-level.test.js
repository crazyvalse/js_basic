/**
 * Created by codingnuts on 2018/9/6.
 */

beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('', () => console.log('1 - test'));
describe('Scoped / Nested block', () => {
	beforeAll(() => console.log('2 - beforeAll'));
	afterAll(() => console.log('2 - afterAll'));
	beforeEach(() => console.log('2 - beforeEach'));
	afterEach(() => console.log('2 - afterEach'));
	test('', () => console.log('2 - test'));
});

