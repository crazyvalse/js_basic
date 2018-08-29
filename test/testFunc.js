/**
 * Created by codingnuts on 2018/7/11.
 */

function fun (n, o) {
	console.info(o)
	return {
		fun: function (m) {
			return fun(m, n);
		}
	};
}

var a = fun(0);
a.fun(1);
a.fun(2);
a.fun(3);
