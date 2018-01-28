// Get dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
const http = require('http');
const app = express();
var cors = require('cors');
app.use(cors());

app.use("/image/:date/:screen/:filename", (req, res) => {
    let date = req.params.date;
    let screen = req.params.screen;
    let filename = req.params.filename;
    var path = `${__dirname}/static/${date}/ManHinh${screen}/${filename}`;
    res.download(path); // Set disposition and send it.
});
app.use("/files/:date/:screen", (req, res) => {
    let date = req.params.date;
    let screen = req.params.screen;
    let files = fs.readdirSync(`static/${date}/ManHinh${screen}`);
    res.json({count: files.length, files: files});
});
app.use(express.static(path.join(__dirname, 'static')));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'ng-pp-www/index.html'));
// });

/**
 * Get port from environment and store in Express.
 */
const port = 81;
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`App running on localhost:${port}`));