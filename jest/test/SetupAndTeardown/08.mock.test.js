/**
 * Created by codingnuts on 2018/9/6.
 */
test(".mock", ()=>{
	const myMock = jest.fn();

	const a = new myMock();
	const b = {};
	const bound = myMock.bind(b);
	bound();

	console.log(myMock.mock.instances);
});




