/**
 * Created by codingnuts on 2018/5/10.
 */
var express = require('express');
var app = express();
var formidable = require('formidable'),
	util = require('util');
app.use(express.static('./static'));

var id = 0;

app.post('/hello', function(req, res){
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {
		console.info(fields)
		res.writeHead(200, {'content-type': 'application/json'});
		res.write('received upload:\n\n');
		res.end(util.inspect({$fid: id ++}));
	});
});

app.listen(3000);

