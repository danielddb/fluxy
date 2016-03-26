var express = require('express');
var app = express();

// Strips /server folder from __dirname
var projectRoot = function() {
    var arr = __dirname.split('/');
    arr.pop();
    return( arr.join('/') );
}();

// Static files location
app.use(express.static(projectRoot + '/app'));

// Send all routes to index.html
app.get('*', function(req, res) {
    res.sendFile(projectRoot + '/app/index.html');
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Fluxy listening on port 3000!');
});