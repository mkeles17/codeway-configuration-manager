const express = require('express');
const configLogRoute = require('./routes/configLogRoute');
const dotenv = require('dotenv');
dotenv.config({path: '../.env'});

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.ACOA_URL);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
    // Respond to preflight requests with a 200 OK status
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
});

const apiRoot = process.env.API_ROOT;

app.use(apiRoot, configLogRoute);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`API server started and listening on port ${port}`);
});