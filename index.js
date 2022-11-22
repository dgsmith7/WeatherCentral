let express = require('express');
let app = express();

app.use(express.static('assets'));

app.get('/', function (req, res) {
res.send('Weather Central Web Application is UP');
});
app.listen(8081, function () {
    console.log('Weather Central Web Application running on port 8081!' + `${_self.MY_NEW_ENV_VAR}`);
});