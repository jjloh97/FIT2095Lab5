let express = require('express');
let app = express();
let bodyParse = require('body-parser');

let viewsPath = __dirname + "/views/";
app.use(express.static('images'));
app.use(express.static('css'));

let db = [];
app.engine("html", require("ejs").renderFile);

app.get('/', function(req,res){
    res.sendFile(viewsPath+"index.html");
});

app.get('/newtask', function(req,res){
    res.sendFile(viewsPath+"newtask.html");
});

app.get('/listtasks', function(req,res){
    res.render(viewsPath + "listtasks.html", {
        task:db
    });
})

app.use(bodyParse.urlencoded({extended:false}));

app.post('/newtask', function (req, res) {
    console.log(req.body);
    db.push(req.body);
});

app.listen(8080);

