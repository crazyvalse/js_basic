/**
 * Created by codingnuts on 2018/4/14.
 */
var twoSum = function(nums, target) {
	var result = [];
	var flag = true;
	for(var i = 0, ni = null ; (ni = nums[i++]) && flag;){
		for(var j = i, nj = null; (nj = nums[j++]) && flag;){
			if(ni + nj == target){
				result.push([ni, nj]);
			}
		}
	}

	return result;
};

console.info(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9))