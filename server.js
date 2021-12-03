var http = require('http');

// Create a server object
http.createServer(function (req, res) {
	
	// http header
	res.writeHead(200, {'Content-Type': 'text/html'});
	
	var url = req.url;
	//GET /movies
	if(url ==='/movies') {
		res.write('All Movies Data in JSON format from Mongo DB');
		res.end();
	}
    //GET /genres
	else if(url ===' /genres') {
		res.write('All Genres Data in JSON format from Mongo DB');
		res.end();
	}
    //GET /artists
	else if(url ===' /artists') {
		res.write('All Artists Data in JSON format from Mongo DB');
		res.end();
	}
}).listen(3000, function() {
	
	// The server object listens on port 3000
	console.log("server start at port 3000");
});
