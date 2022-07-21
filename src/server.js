require('./environments/config');
const express = require('express');
const cors = require('cors');

const port = process.env.HTTP_PORT || 3000;

const app = express();


app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization, API-Key, u'
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Starting the server
app.listen(port, () => {
console.log(`API listenning on port ${port}`);
})