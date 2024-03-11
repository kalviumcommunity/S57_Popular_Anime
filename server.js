const express = require('express');
const app = express();
const port = process.env.PUBLIC_PORT || 3000;
app.get('/ping', (req, res) => {
  res.send('pong');
});
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on PORT: ${port}`);
  });
}

module.exports = app;