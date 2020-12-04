const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json()); //이 데이터 형식으로 주고받음. 
app.use(bodyParser.urlencoded({ extended: true }));

const mysql = require('mysql');

app.get('/api/customers', (req, res) => {
  console.log('hh');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
