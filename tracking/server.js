/**
 * Created by codingnuts on 2018/9/16.
 */
const express = require("express"),
	app = express(),
	fs = require("fs");

const __gif = fs.readFileSync("./__utm.gif");

app.get("/__utm.gif", function (req, res) {
	console.info(req.query);

	res.writeHead(200, {'content-type': 'image/gif'});
	res.end(__gif);
});

app.listen(3000);
