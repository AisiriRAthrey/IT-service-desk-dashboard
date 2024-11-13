const express = require('express');
const app = express();
const PORT = 5000;
const tickets = require('./data/sample_tickets.json');

app.use(express.json());

app.get('/api/tickets', (req, res) => {
  res.json(tickets);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
