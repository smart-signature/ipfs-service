var IPFS = require('ipfs-mini');

var app = require('express')();
var bodyParser = require('body-parser');

var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

var moment = require('moment');
var _ = require('lodash');
var async = require('async');

var log4js = require('log4js');
var logger = log4js.getLogger("libra");
logger.level = 'debug';

const ipfs = new IPFS(); // local node
ipfs.setProvider({ host: 'ipfs', protocol: 'http' })

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

//allow custom header and CORS
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.sendStatus(200);
    }
    else {
        next();
    }
});

app.get('/cat/:hash', function (req, res) {
    var hash = req.params.hash;

    ipfs.cat(hash, (err, result) => {
        if (err) {
            return res.json({ code: 500 });
        }
        res.json({ code: 200, data: result });
    });
});

app.get('/catJSON/:hash', function (req, res) {

    var hash = req.params.hash;

    ipfs.catJSON(hash).then(result => {
        res.json({ code: 200, data: result });
    }).catch(err => {
        res.json({ code: 500 });
    });
});

app.post('/add', function (req, res) {
    var data = req.body.data;

    ipfs.add(data).then(result => {
        res.json({ code: 200, hash: result });
    }).catch(err => {
        res.json({ code: 500 });
    });
});

app.post('/addJSON', function (req, res) {
    var data = req.body.data;

    ipfs.addJSON(data).then(result => {
        res.json({ code: 200, hash: result });
    }).catch(err => {
        res.json({ code: 500 });
    });
});

var config = require("./config.js");
var mysql = require('mysql');
//创建mysql连接池
var pool = mysql.createPool(config.mysql);

// mysql数据库 相关
app.post('/submitmail', function (req, res) {
    var username = req.body.username;
    var mail = req.body.mail;

    logger.debug("submut mail", username, mail);

    var sql = `INSERT INTO userinfo  VALUES (null,'${username}', '${mail}') ON DUPLICATE KEY UPDATE mail='${mail}';`

    pool.getConnection(function (err, connection) {

        if (err) {
            return res.json({ code: 500, msg: "submut mail fail, get db error" });
        }

        connection.query(sql, function (err, result) {
            connection.release();
            if (err) {
                logger.error(err);

                res.json({ code: 500, msg: "submut mail fail" });
            } else {
                res.json({ code: 200 });
            }
        });
    });

});


http.listen(port, function () {
    logger.info('listening on *:' + port);
});

