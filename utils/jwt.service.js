const ENV_KEYS = require('../environment');
const {sign,verify} = require('jsonwebtoken')

const {userToken} = require('../database/config/database.config');
const buildToken = async (user,role)=>{


    const payload = {
        name:user.name,
        id:user.user_id,
        role
    }
    const accessToken =  sign(payload,ENV_KEYS.JWT_SECRET,{
        expiresIn:ENV_KEYS.EXPIRE_IN
    })

    const refreshToken = sign(payload,ENV_KEYS.REFRESH_SECRET,{
        expiresIn:ENV_KEYS.R_EXPIRE_IN
    })
    console.log();
    
    
    const userTokenDetails = await userToken.findOne({
        where:{
            userId:user.user_id
        }
    })
   
    
    if(userTokenDetails)
        await userTokenDetails.destroy();
    await userToken.create({
        userId:user.user_id,
        refreshToken
    })
    console.log(accessToken,refreshToken);
    

    return {accessToken,refreshToken}
}

const verifyAccessToken  = async (token)=>{
    const payload = verify(token,ENV_KEYS.JWT_SECRET);
    return payload;
}

const verifyRefreshToken = async (token)=>{
    console.log(token);
    
    const userTokeDetails = await userToken.findOne({
        where:{
            refreshToken:token
        }
    })
    console.log(userTokeDetails);
    
    if(!userTokeDetails)  throw new Error("Invalid refresh token");

    const payload = verify(token,ENV_KEYS.REFRESH_SECRET);


    return payload;
}



module.exports = {
    buildToken,
    verifyRefreshToken,
    verifyAccessToken
}