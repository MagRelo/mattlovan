const express = require('express');
const path = require('path');
const app = express();

// Serve static files from build directory
app.use(
  express.static('build', {
    maxage: '1y',
  })
);

// Handle React Router - return all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
