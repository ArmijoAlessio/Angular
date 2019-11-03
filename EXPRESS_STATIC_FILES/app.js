const express = require('express');
const path = require('path');
const http = require('http');
const app= express();

var cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api', (req, res) => {
  res.send('api works');
});

app.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'products.json'))
});


app.get('*', (req, res) => {
   res.send('app works!');

});

const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port,  () => {console.log('Example app listening on port 3000!');});

/*
app.get('/',function(req,res){
 res.sendFile(path.join(__dirname+'/index.html')); //__dirname : Ritorna la cartella del progetto
});
app.get('/about',function(req,res){
 res.sendFile(path.join(__dirname+'/about.html')); //__dirname : Ritorna la cartella del progetto
});
app.get('/sitemap',function(req,res){
 res.sendFile(path.join(__dirname+'/sitemap.html')); //__dirname : Ritorna la cartella del progetto
});
*/

