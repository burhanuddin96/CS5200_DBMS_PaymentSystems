const express = require('express');
const app = express();
const port = process.env.PORT || 5253;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/home', (req, res) => {
  res.send({ message: 'CONNECTION SUCCESSFUL!!!' });
});
