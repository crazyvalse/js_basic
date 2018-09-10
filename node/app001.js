/**
 * Created by codingnuts on 2018/5/10.
 */
var express = require('express');
var app = express();

app.get('/hello', function(request, response){
	console.info(request.valueOf())
	response.send('hello world!');
});

app.listen(3000);

