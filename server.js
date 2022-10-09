require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();

const stripe = require("stripe")("sk_test_51LgGRWBwp5ChlQ01hhNLkUtdap130VfV49LUUa4P61s2dCgvzFUlIFUhWKGc1Lj3Lwna8geZFOme0RUaQZR9UcFG00dnN5dY0X")
const uuid = require("uuid")

app.use(cors({ credentials: true, origin:  "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/config/mongoose.config'); 


require('./server/routes/main.routes')(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})