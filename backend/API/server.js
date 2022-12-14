var http = require('http');
const fs = require('fs');
//create a server object:
var posts = 0; 
http.createServer(function (req, res) {

    if (req.method == "POST") {
        //console.log('POST /')
        var body = '';
        req.on('data', function (data) {
            body += data;
        });

        req.on('end', function () {
            console.log(body);
            let jsonObj = JSON.parse(body);
            //console.log(jsonObj);
            //var jsonContent = JSON.stringify(jsonObj);
            //console.log(jsonContent);

                // fs.writeFile("data.json", JSON.stringify([jsonObj], null, 2), function (err) {
                //     if (err) {
                //         console.log("An error occured while writing JSON Object to File.");
                //         return console.log(err);
                //     }
                //     // console.log(posts);
                // });

                fs.readFile('data.json', 'utf8', (err, body) => {
                    if (err) throw err
                    let data = JSON.parse(body);
                    data.push(jsonObj);
                    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => { 
                        if (err) throw err;
                    })
                });

        });

    } else {
        console.log('GET /')
    }

}).listen(8080); //the server object listens on port 8080
