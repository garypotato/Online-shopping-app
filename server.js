const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.LEANCLOUD_App_PORT || 3000

app.get('*', (req, res) => {
  res.sendFile(path.join(path.join(__dirname, 'build', 'index.html')))
})

app.listen(port);