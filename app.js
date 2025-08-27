    const express = require('express');
    const app = express();
    const port = 3000; // You can choose any available port

    // Define a route for GET requests to the root URL
    app.get('/', (req, res) => {
      res.send('Hello World from Express!');
    });

    // Start the server and listen for incoming requests
    app.listen(port, () => {
      console.log(`Express app listening at http://localhost:${port}`);
    });