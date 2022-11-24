"use strict";
//  express - get instance app - add routes - listen

(function () {
    require('dotenv').config();
    let express = require('express');
    let path = require('path');

    let app = express();

    //app.use(express.static('public'));
    app.use('/public', express.static('public'))
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname,'/weather_map.html'));
//        res.send('Weather Central Web Application is UP');
    });
    app.listen(8080, function () {
        console.log('Weather Central Web Application running on port 80!');
    });

}());