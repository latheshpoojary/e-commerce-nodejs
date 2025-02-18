const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const ENV_KEYS = require('./environment');
const globalErrorHandler = require('./middlewares/error.middleware');
const AppError = require('./services/appError');
const catchAsync = require('./services/catchAsync');
const userRoute = require('./routes/user.route');
const addressRoute = require('./routes/address.route');
const sellerRoute = require('./routes/seller.route')
const categoryRoute = require('./routes/category.route')
const specificationCategoryRoute = require('./routes/specification_category.route')
const specificationCategoryMapRoute = require('./routes/category_specification_map.route')
const refreshRoute = require('./routes/refreshToken.route')
// require('./database/models/association')
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:"*" //basic setup
}))
app.use(cookieParser())

app.use('/api/v1/auth',userRoute)
app.use('/api/v1/seller',sellerRoute)
app.use('/api/v1/category',categoryRoute);
app.use('/api/v1/specification',specificationCategoryRoute);
app.use('/api/v1/category_specification_map',specificationCategoryMapRoute);
app.use('/api/v1/address',addressRoute);
app.use('/api/v1/refresh',refreshRoute);

app.use('*',catchAsync(async (req,res,next)=>{
    throw new AppError(`Can't find ${req.originalUrl} on this server`,404);
}))

app.use(globalErrorHandler)

app.listen(ENV_KEYS.port,()=>{
    console.log("Server is running on ",3000);
})