const express = require('express');
const url = require('url');
const app = express();
const port = 3010;

app.get('/', (req, res) => {
	const fullUrl = url.format({
		protocol: req.protocol,
		host: req.get('host'),
		pathname: req.originalUrl
	});
	res.send('Hello World:', fullUrl);
});

app.listen(port, () => {
	console.log(`Web service listening at http://localhost:${port}`);
});
