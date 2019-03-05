var async = require('async');
var _ = require('lodash');
var EOS = require('eosjs');

var log4js = require('log4js');
var logger = log4js.getLogger("steam_key");
logger.level = 'debug';
var request = require("request");
var config = require("./config.js");

var mysql = require('mysql');

//创建mysql连接池
var pool = mysql.createPool(config.mysql);

var main_contract = "signature.bp";
var table_name = "orders";

var eosClient = EOS({
    broadcast: true,
    sign: true,
    chainId: config.eos.chainId,
    keyProvider: [config.eos.keyProvider],
    httpEndpoint: config.eos.httpEndpoint
});

var nodemailer = require('nodemailer');

// 轮询 table row
var schedule = require('node-schedule');

schedule.scheduleJob('0 */1 * * * *', function () {
    check_table_row();
});

function check_table_row() {
    logger.debug("check_table_row ..")

    eosClient.getTableRows({
        json: "true",
        code: main_contract,
        scope: main_contract,
        table: table_name,
        limit: -1,
        lower_bound: 0
    }).then(data => {
        if (data.rows && data.rows.length > 0) {
            for (var i = 0; i < data.rows.length; i++) {
                var order = data.rows[i];
                // order status 一开始等于0 ，等于0，表示已付款，未发货
                // if (order.status == 0) {
                shipped(order);
                // }
            }
        }
    }).catch(e => {
        logger.error(e);
    });
}

/**
 * 发货（发key）
 */
function shipped(order) {

    logger.info("has new order:", order)

    // 1 取到key和email

    // 2 调用发邮件的api

    // 3 修改数据数据库中key的状态 status = 1

    // 4 修改合约中table row的状态

    async.waterfall([

        // 1 从mysql数据库中拿到 keys 
        function (callback) {
            pool.getConnection(function (err, connection) {
                var sql = `select * from stream_keys where status = 0 limit ${order.count}`;
                connection.query(sql, function (err, result) {
                    connection.release();

                    var keys = [];
                    _.each(result, row => {
                        keys.push(row.keystr)
                    })

                    if (keys.length == 0) {
                        return callback(new Error("No key!"))
                    }

                    callback(null, keys);
                });
            });
        },
        // 2 从mysql数据库中拿到买家的 mail 
        function (keys, callback) {
            pool.getConnection(function (err, connection) {
                var sql = `select * from userinfo where username = '${order.buyer}' `;
                connection.query(sql, function (err, result) {
                    connection.release();

                    var mail = "";

                    if (result && result.length > 0) {
                        mail = result[0].mail;
                    } else {
                        return callback(new Error("No mail!"))
                    }

                    callback(null, keys, mail);
                });
            });
        },
        // 3 调用发邮件的api
        function (keys, mail, callback) {

            logger.info("sending mail: ", keys, mail)

            var html_content = "这是您购买的steam key， 请查收。（我不是垃圾邮件。）<br/>"

            _.each(keys, key => {
                html_content += key
                html_content += "<br/>"
            })

            let mailOptions = {
                from: `"Steam key " <${config.mail.auth.user}>`, // sender address
                to: mail, // list of receivers
                subject: 'Steam key, 拿好', // Subject line
                // text: 'Steam key ', // plain text body
                html: html_content // html body
            };

            // // create reusable transporter object using the default SMTP transport
            var transporter = nodemailer.createTransport(config.mail);

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    logger.error(error);
                    return callback(new Error("Mail send fail!"));
                }
                logger.info('Mail success sent: %s', info.messageId);
                callback(error, keys);
            });

        },

        // 4 修改数据数据库中key的状态 status = 1
        function (keys, callback) {

            pool.getConnection(function (err, connection) {

                async.mapLimit(keys, 10, function (key, cb) {

                    var sql = `update stream_keys set status = 1 where keystr = '${key}'`;

                    connection.query(sql, function (err, result) {
                        cb(err);
                    });

                }, function (err, result) {

                    logger.info("update mysql db Done");
                    connection.release();
                    callback(err);
                });

            });

        },
        // 5 修改(or删除row) 合约中table row的状态
        function (callback) {

            var actions = [];

            actions.push(
                {
                    account: 'signature.bp',
                    name: 'rmorder',
                    authorization: [{
                        actor: 'signature.bp',
                        permission: 'active'
                    }],
                    data: {
                        id: order.id
                    }
                }
            );

            eosClient.transaction({
                actions: actions
            }).then(data => {
                logger.info(`rmorder success ..`);
                callback();
            }).catch(err => {
                logger.error("rmorder err", err);
                callback(new Error("rmorder err"));
            })
        }
    ], function (err) {
        if (err) {
            logger.error("final error log", err);
        }
    });

}









