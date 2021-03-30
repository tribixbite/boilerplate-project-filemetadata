var express = require('express');
var cors = require('cors');
var multer = require('multer');
var upload = multer({ dest: './public/data/uploads/' });
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});


app.post('/api/fileanalyse', upload.single('upfile'), function(req, res){
  //req.file is 'upfile' https://github.com/expressjs/multer#readme
  let upfile = req.file;
  res.json({'name': upfile.originalname, 'type': upfile.mimetype, 'size': upfile.size});
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
