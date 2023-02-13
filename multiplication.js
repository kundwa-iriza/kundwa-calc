const express = require('express');

const app = express();

app.get('/product', (req, res) => {
  const numbers = req.query.numbers;
  
  if (!Array.isArray(numbers)) {
    res.status(400).send({ error: 'Bad Request: "numbers" should be a comma-separated list of numbers' });
    return;
  }
  
  const product = numbers.reduce((total, num) => {
    return total * parseInt(num);
  }, 1);
  
  res.send({ product: product });
});

const port = 8080;

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
