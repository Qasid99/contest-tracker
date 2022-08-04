const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();
const dotenv = require("dotenv");
var cors = require('cors')
dotenv.config({ apth: './config.env' });
app.use(cors())
require("dotenv").config();

//const apiKey = `username=${process.env.USER_NAME}&api_key=${process.env.API_KEY}`;
//console.log(apiKey);

// Serve static files from the React app
//app.use(express.static(path.join(__dirname, "client/build")));

//console.log(process.env.APIKEY);
//console.log(process.env.USER_NAME);
//app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.static(path.join(__dirname, "trackcontest/build")));

app.get("/*", (req, res) => {
    axios
        .get(
            `https://clist.by/api/v2/json/contest/?limit=1000&offset=1&with_problems=false&upcoming=true&order_by=start&ap/&username=${process.env.USER_NAME}&api_key=${process.env.APIKEY}`
        )
        .then((response) => {
            // console.log(`statusCode: ${res.statusCode}`);
            // console.log(response);
             res.send(response.data);
          /*  const __dirname1 = path.resolve();
            if (process.env.NODE_ENV === "production") {
                app.use(express.static(path.join(__dirname1, "trackcontest/build")))

                app.get("*", (req, res) => {
                    res.sendFile(path.resolve(__dirname1, "trackcontest", "build"))
                })
            }
            else {
                app.get("/", (req, res) => {
                    res.send("Api is Running");
                })
             }

            */  })
        .catch((error) => {
            console.error(res.statusCode);
            res.send("Server is 404");

        });
});
/*
app.get("/contest*", (req, res) => {
    axios
        .get(
            `https://clist.by:443/api/v1/json/contest/?resource__id=${req.query.resource__id}&start__gte=${req.query.start__gte}&order_by=${req.query.order_by}&${apiKey}`
        )
        .then((response) => {
            // console.log(req.query, "HIIIIIIIIIIIIIIIIIIIIIIII");
            // console.log(`statusCode: ${res.statusCode}`);
            // console.log(response);
            res.send(response.data);
        })
        .catch((error) => {
            // console.error(error);
            res.send("Server is 404");
        });
});


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
*/
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "trackcontest/build/index.html"));
});
/*
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'track/build/index.html'));
  });

/*
if(process.env.NODE_ENV == "production"){
    app.use(express.static("/contest-tracker/build"));
    const path =  require("path");
    app.get("*",(req,res) => {
        res.sendFile(path.resolve(__dirname,'contest-tracker','build','/contest-tracker/build/index.html'));
    })
}
*/
//console.log(__dirname+"/contest-tracker/build");

/*app.use(express.static(path.join(__dirname, "trackcontest/build")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "trackcontest/build/index.html"));
  });
*/


/*
const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname1, "trackcontest/build")))

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname1, "trackcontest", "build"))
    })
}
else {
    app.get("/", (req, res) => {
        res.send("Api is Running");
    })
}

*/
const port = process.env.PORT || 5000;
app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);
