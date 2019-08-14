const express = require('express');
const app = express();
const port = 3000;
// const port = 3001;
const path = require('path');

app.use(function(req, res, next){
  console.log(`${req.method} request for ${req.url}`);
  next();
});

app.use(express.static('./public'));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/popper', express.static(path.join(__dirname, 'node_modules/popper.js/dist/umd')));

app.listen(port, () => console.log(`application is running on port ${port}`));
