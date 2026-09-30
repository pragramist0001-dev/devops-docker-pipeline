const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ status: 'success', message: 'DevOps Pipeline v2 test is successful!' });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
