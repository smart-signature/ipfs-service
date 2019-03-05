var request = require("request");

// var host = "http://localhost:3200"
var host = "https://ipfs.libra.bet"

// request({
//     uri: host + "/add",
//     rejectUnauthorized: false,
//     json: true,
//     headers: { "Accept": '*/*' },
//     dataType: 'json',
//     method: "POST",
//     form: {
//         data: "test ipfs service",
//     }
// }, function (error, response, body) {
//     console.log(body)
// });

// request({
//     uri: host + "/addJSON",
//     rejectUnauthorized: false,
//     json: true,
//     headers: { "Accept": '*/*' },
//     dataType: 'json',
//     method: "POST",
//     form: {
//         data: {
//             btc: "to the moon1",
//             eth: "to the moon2",
//             eos: "to the moon3",
//         },
//     }
// }, function (error, response, body) {
//     console.log(body)
// });

// request({
//     uri: host + "/cat/QmREig9GMWQWeVa1Shqps8rdc7kn46bLEcJHHUVEDRSucr",
//     rejectUnauthorized: false,
//     json: true,
//     headers: { "Accept": '*/*' },
//     dataType: 'json',
//     method: "GET",
// }, function (error, response, body) {
//     console.log(body)
// });

// request({
//     uri: host + "/catJSON/QmeWimD5XSPCZktzw9kYwZDRQB1iwGkcZErEyWW5nSWT3B",
//     rejectUnauthorized: false,
//     json: true,
//     headers: { "Accept": '*/*' },
//     dataType: 'json',
//     method: "GET",
// }, function (error, response, body) {
//     console.log(body)
// });

request({
    uri: host + "/submitmail",
    rejectUnauthorized: false,
    json: true,
    headers: { "Accept": '*/*' },
    dataType: 'json',
    method: "POST",
    form: {
        username: "joetothemoon",
        mail: "343747757@qq.com",
    }
}, function (error, response, body) {
    console.log(body)
});