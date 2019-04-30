var request = require("request");

// var host = "http://localhost:3200"
// var host = "https://api.smartsignature.io/ipfs"
var host = "https://apitest.smartsignature.io/ipfs"
// var host = "https://api.smartsignature.io/"

// request({
//     uri: host + "/add",
//     rejectUnauthorized: false,
//     json: true,
//     headers: { "Accept": '*/*' },
//     dataType: 'json',
//     method: "POST",
//     form: {
//         data: "test ipfs service111212121",
//     }
// }, function (error, response, body) {
//     console.log(body)
// });

request({
    uri: host + "/addJSON",
    rejectUnauthorized: false,
    json: true,
    headers: { "Accept": '*/*' },
    dataType: 'json',
    method: "POST",
    form: {
        data: {
            btc: "to the moon1a",
            eth: "to the moon2b",
            eos: "to the moon3c",
        },
    }
}, function (error, response, body) {
    console.log(body)
});

// request({
//     uri: host + "/cat/Qme91zBC7WGqbZfpWvRQBXvHgbnoo5wszqkkSdazxqVgCG",
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

// request({
//     uri: host + "/submitmail",
//     rejectUnauthorized: false,
//     json: true,
//     headers: { "Accept": '*/*' },
//     dataType: 'json',
//     method: "POST",
//     form: {
//         username: "joetothemoon",
//         mail: "343747757@qq.com",
//     }
// }, function (error, response, body) {
//     console.log(body)
// });

// var request = require("request");

// var host = "https://api.smartsignature.io/"

// request({
//     uri: host + "/publish",
//     rejectUnauthorized: false,
//     json: true,
//     headers: { "Accept": '*/*' },
//     dataType: 'json',
//     method: "POST",
//     form: {
//         username: "joetothemoon",
//         author: "tengavinwood",
//         title: "test publish api with request lib",
//         publickey: "EOS8QP2Z6tApaUYPEC6hm9f1pZrSEMmZ7n5SsvjzA3VTnRXUyra9E",
//         hash: "QmNzMrW3J7eY6KPqXd3TLwr2Y31iga2QowzrhUPJYk2mcy",
//         sign: "SIG_K1_KZU9PyXP8YAePjCfCcmBjGHARkvTVDjKpKvVgS6XL8o2FXTXUdhP3rqrL38dJYgJo2WNBdYubsY9LKTo47RUUE4N3ZHjZQ",
//     }
// }, function (error, response, body) {
//     console.log(body)
// });

// curl -d "author=tengavinwood&title=xxxxx&publickey=EOS8QP2Z6tApaUYPEC6hm9f1pZrSEMmZ7n5SsvjzA3VTnRXUyra9E&hash=QmNzMrW3J7eY6KPqXd3TLwr2Y31iga2QowzrhUPJYk2mcy&sign=SIG_K1_KZU9PyXP8YAePjCfCcmBjGH
// ARkvTVDjKpKvVgS6XL8o2FXTXUdhP3rqrL38dJYgJo2WNBdYubsY9LKTo47RUUE4N3ZHjZQ" -X POST https://api.smartsignature.io/publish




// request({
//     uri: "https://m.newdex.io/api/draw/start",
//     rejectUnauthorized: false,
//     json: true,
//     headers: { "Accept": '*/*', "token": "791b9b89a3f8465997b3ab9e5397ac3b", "path": "/api/draw/start" , "authority":"m.newdex.io"},
//     dataType: 'json',
//     method: "GET",
// }, function (error, response, body) {
//     console.log(error, body)
// });
