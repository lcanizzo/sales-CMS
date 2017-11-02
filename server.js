// D E P E N D E N C I E S 
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// G E T   A P I    R O U T E S 
const api = require('./server/routes/api');
const app = express();

// P A R S E R S   F O R   D A T A 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// S T A T I C
app.use(express.static(path.join(__dirname, 'dist')));

//  A P I   R O U T E S
app.use('/api', api);

// C A T C H
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// S E R V E R 
const PORT = process.env.PORT || '8080';
app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT, ()=> console.log(
    `API listening on localhost:${PORT}`
));
