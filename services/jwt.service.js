const ENV_KEYS = require('../environment');
const {sign,verify} = require('jsonwebtoken')

const {user,us} = require('../database/config/database.config');
const buildToken = async (user,role)=>{


    const payload = {
        name:user.name,
        id:user.id,
        role
    }
    const accessToken =  sign(payload,ENV_KEYS.JWT_SECRET,{
        expiresIn:ENV_KEYS.EXPIRE_IN
    })

    const refreshToken = sign(payload,ENV_KEYS.REFRESH_SECRET,{
        expiresIn:ENV_KEYS.R_EXPIRE_IN
    })
     (user.id,"User");
    
    const userToken = await UserToken.findOne({
        where:{
            userId:user.id
        }
    })
     (userToken);
    
    if(userToken)
        await userToken.destroy();
    await UserToken.create({
        userId:user.id,
        refreshToken
    })

    return {accessToken,refreshToken}
}

const verifyRefreshToken = async (token)=>{

    const userToken = await UserToken.findOne({
        where:{
            refreshToken:token
        }
    })
    if(!userToken)  throw new Error("Invalid refresh token");

    const payload = verify(token,ENV_KEYS.REFRESH_SECRET);


    return payload;
}



module.exports = {
    buildToken,
    verifyRefreshToken
}