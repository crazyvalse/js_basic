/**
 * Created by codingnuts on 2018/8/11.
 */
/**
 * note: 使用栈来存放文件夹，遇到.. 弹出, 遇到 .或者 ''不处理, 其他情况push
 * 1. 获得路径之后, 先做分割完整路径
 * 2. 确定文件夹
 *  a. 连续的/ : 可以理解为当前文件夹 不需要处理
 *  b. .: 当前文件夹
 *  c. ../上一级文件夹: pop
 *  d. 其他情况: push
 *
 * 3. 返回结果
 * @param path
 */

function simplify (path){
	if(!(path && typeof path == "string")){
		throw new Error("path is error");
	}

	let folders = path.split("/"), stack = [];
	for(let item of folders) {
		if(!item || item == "/" || item == ".") {
			continue;
		}
		if(item == ("..")){
			if(stack.length) {
				stack.pop();
			}
		} else{
			stack.push(item);
		}
	}

	return "/" + stack.join("/");
}

console.info(simplify('../a/bb/../c/d////e/../'))
