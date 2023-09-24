var express = require('express');
var app = express();

var allowCrossDomain = function(req, res, next) {
   res.header('Access-Control-Allow-Origin', "*");
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
   res.header('Access-Control-Allow-Headers', 'Content-Type');
   next();
}
app.use(allowCrossDomain);

app.get('/getname', function (req, res) {
   ob = {name: "Pranit", surname: "Deshmukh"}
   res.send(ob);
})


var server = app.listen(8080, function () {
   console.log("Example app listening at http://%s:%s")
})