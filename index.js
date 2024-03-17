const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db.js');
const router = require('./src/router/app.js');
const app = express();
const accountController = require('./src/controller/accountController.js');


app.use(bodyParser.json());

app.use('/v1', router);

app.listen(3000, () => {
    console.log("SERVER IS RUNNING...");

    connection.connect(() => {
        console.log("DB is connected !!!");
    })
})