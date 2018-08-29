/**
 * Created by codingnuts on 2018/6/13.
 */
var menu = [
	{
		"name": "p1",
		"title": "稿件中心",
		"children": [
			{
				"name": "Am0",
				"title": "稿件列表",
				"children": []
			},
		]
	},
	{
		"name": "p2",
		"title": "组刊中心",
		"children": []
	},
	{
		"name": "p3",
		"title": "管理中心",
		"children": [
			{
				"name": "Ab3",
				"title": "刊期管理",
				"children": []
			},
			{
				"name": "Ab0",
				"title": "刊物信息",
				"children": []
			}
		]
	}
]


var routes = [
	{
		"name": "p1",
		"title": "稿件中心",
		"children": [
			{
				"name": "Am0",
				"title": "稿件列表",
				"children": []
			},
			{
				"name": "Am1",
				"title": "优先列表",
				"children": []
			},
			{
				"name": "Am2",
				"title": "组刊列表",
				"children": []
			},
			{
				"name": "Am3",
				"title": "撤回列表",
				"children": []
			}
		]
	},
	{
		"name": "p2",
		"title": "组刊中心",
		"children": []
	},
	{
		"name": "p3",
		"title": "管理中心",
		"children": [
			{
				"name": "Ab1",
				"title": "用户管理",
				"children": []
			},
			{
				"name": "Ab2",
				"title": "栏目管理",
				"children": []
			},
			{
				"name": "Ab3",
				"title": "刊期管理",
				"children": []
			},
			{
				"name": "Ab0",
				"title": "刊物信息",
				"children": []
			}
		]
	}
];

var getRoutesMap = function (routes, map) {
	let map = map || {};

	if(Array.isArray(routes) && !routes.length){

	}
};