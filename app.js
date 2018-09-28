const express = require('express');
const app = express();
const timer = ms => new Promise( res => setTimeout(res, ms));


app.get('/',  async (req, res)=> {
  res.send('Hello World!');
  await timer(3000);
  return;
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
