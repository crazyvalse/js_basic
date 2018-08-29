/**
 * Created by codingnuts on 2018/4/18.
 */
/**
 * * editor.addListener('beforegetcontent aftergetcontent',function(type){
     *         if(type == 'beforegetcontent'){
     *             //do something
     *         }else{
     *             //do something
     *         }
     *         console.log(this.getContent) // this是注册的事件的编辑器实例
     * })
 * @param types
 * @param fn
 */

var events = {
	key:[]
};
function addListener(types, fn){
	var keys = types.split(" ");
	keys.forEach(function (item) {
		events[item].push(fn);
	});
}


$emit("key key2 keys", 123);