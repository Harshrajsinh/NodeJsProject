var opcode = require("express");
// console.log('Hey! How are you?');
// console.log(opcode);
var app = opcode();

// app.get('/happy-birthday/:name',(req,res) => res.send('Happy Birthday '+req.params.name+'!'))

app.listen(8000,() => console.log("Listening the port 8000!!"))

var parser = require('body-parser');
app.use(parser.json);
app.post('/add2Number', (req,res) => res.send(req.body.a+req.body.b));