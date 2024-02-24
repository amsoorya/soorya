const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/vote', (req, res) => {
  const { choice } = req.body;
  // Handle the vote here (e.g., store it in the database)
  console.log(`Received vote: ${choice}`);
  // Respond with success status
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
