const userRouter = require('./src/routes/userRoute')
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const methodOverride = require('method-override');
var cors = require('cors')
const config = require('./config.js');

const app = express();

app.listen(config.PORT, () => {
    console.log("Server is running at port ", config.PORT, " and on ", config.NODE_ENV, " environment. ");
});

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(methodOverride('_method'))
app.use(bodyParser.json())
app.use(cors())

app.use(userRouter)