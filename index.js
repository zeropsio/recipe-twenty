const express = require('express');
const app = express();
const port = 3010;

app.get('/', (req, res) => {
	const url = req.url;
	const protocol = req.protocol;
	const host = req.get('host');
	const pathname = req.originalUrl;
	res.send('Hello World:' + url + '|' + protocol + '|' + host + '|' + pathname);
});

app.listen(port, () => {
	console.log(`Web service listening at http://localhost:${port}`);
});
