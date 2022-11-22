"use strict";

(function () {
    let express = require('express');

    let app = express();

    app.use(express.static('assets/js'));

    app.get('/', function (req, res) {
        res.send('Weather Central Web Application is UP');
    });
    app.listen(80, function () {
        console.log('Weather Central Web Application running on port 80!');
    });
}());