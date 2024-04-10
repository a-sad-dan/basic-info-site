const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

//Create Server
const server = http.createServer((req, res) => {
	console.log(req.url);

	if (req.url === '/' || req.url === '') {
		fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
			if (err) throw err;
			res.end(content);
		});
	}
	if (req.url === '/about') {
		fs.readFile(path.join(__dirname, 'about.html'), (err, content) => {
			if (err) throw err;
			res.end(content);
		});
	}
	if (req.url === '/contact-me') {
		fs.readFile(path.join(__dirname, 'contact-me.html'), (err, content) => {
			if (err) throw err;
			res.end(content);
		});
	} else {
		fs.readFile(path.join(__dirname, '404.html'), (err, content) => {
			if (err) throw err;
			res.end(content);
		});
	}
});

//Start Server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () =>
	console.log(`Server Running on http://localhost:${PORT}`)
);
