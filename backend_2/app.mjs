
import  {CustomerService}  from './services/customer-service.mjs';
import cors from 'cors';
import express from 'express'

const PORT    = 3000;
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


app.get('/api/customers/', function(req, res, next) {

    let service = new CustomerService();
    let devices = service.getAllCustomers();

    res.send(devices);
    
});

app.listen(PORT, function(req, res) {
    console.log("NodeJS API running correctly");
});

//=======[ End of file ]=======================================================
