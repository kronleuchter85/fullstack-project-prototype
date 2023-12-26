

const cors = require('cors');
const express = require('express');
const DeviceService = require('./services/device-service')

const PORT = 3000;
const app = express();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// to parse application/json
app.use(express.json()); 
// to serve static files
// app.use(express.static('/home/node/app/static/'));

// to enable cors
app.use(cors(corsOptions));

//=======[ Main module code ]==================================================

app.get('/api/devices/', function(req, res, next) {

    let service = new DeviceService();
    let devices = service.getAllDevices();

    res.send(devices);
    
});

app.listen(PORT, function(req, res) {
    console.log("NodeJS API running correctly");
});

//=======[ End of file ]=======================================================
