const express = require('express');
const cors = require('cors')
const ENV_KEYS = require('./environment');
const globalErrorHandler = require('./middlewares/error.middleware');
const AppError = require('./services/appError');
const catchAsync = require('./services/catchAsync');
const userRoute = require('./routes/user.route')
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:"*" //basic setup
}))

app.use('/api/v1/auth',userRoute)

app.use('*',catchAsync(async (req,res,next)=>{
    throw new AppError(`Can't find ${req.originalUrl} on this server`,404);
}))

app.use(globalErrorHandler)

app.listen(ENV_KEYS.port,()=>{
    console.log("Server is running on ",3000);
})