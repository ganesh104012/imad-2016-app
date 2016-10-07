var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    article1:{
        title:'Article 1',
        heading:'The First Article',
        date:'20-Mar-2016',
        content:`<p>
                    The content of Article1 is little short from other Contents.
                </p>`
    },
    article2:{
        title:'Article 2',
        heading:'The Second Article',
        date:'02-Jun-2016',
        content:`<p>
                    The content of Article2 is Longer than article 1.The content of Article2 is Longer than article 1.The content of Article2 is Longer than article 1.
                </p>`
    },
    article3:{
        title:'Article 3',
        heading:'The Last Article',
        date:'15-Aug-2016',
        content:`<p>
                    The Article3 Contains more paragraphs. Paragragh 1.
                </p><p>
                    The Article3 Contains more paragraphs. Paragragh 2.
                </p><p>
                    The Article3 Contains more paragraphs. Paragragh 3.
                </p>`
    }
};
var template=function(data)
{
    var title= data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var struct=`<!DOCTYPE html>
<html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div clas="title_area">
                <h1>
                    Ganeshkumar is my name.
                </h1>
            </div>
            <div clas="date_area">
                <h5>10-Mar-2016</h5>
            </div>
            <div clas="content_area">
                <p>
                    The content of Article1 is little short from other Contents.
                </p>
            </div>
        </div>
    </body>
</html>`;
return struct;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:article',function(req,res){
   //res.send('Ganesh is my name!');
   res.send(path.join(__dirname,'ui','name.html'));
});
app.get('/name',function(req,res){
   //res.send('Ganesh is my name!');
   res.sendFile(path.join(__dirname,'ui','name.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
