var app = require("express")();
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
    res.render('index');
});
 
var routes = require("./controllers/burgers_controllers");

app.use(routes);

app.listen(3000,function(err){
    if(err)throw err;
    console.log("listening to 3000");
});