/**
 * Created by codingnuts on 2018/3/14.
 */
var path = require("path");

console.info(path.basename(path.resolve(__dirname, "./testDes.js"), path.extname(path.resolve(__dirname, "./testDes.js"))));
