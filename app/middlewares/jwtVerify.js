//Helpers
import jwtValidate from '../helpers/jwt/jwtValidate.js';

const jwtVerify = (req, res, next) => {
  try{
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ status: false, message: 'No token provided.' });

    const {error, decoded} = jwtValidate(token);
    
    if(error){
      new Error('Failed to authenticate token.');
    }

    req.userId = decoded.userId;
    next();
  }
  catch(error){
    console.error(error);
    return res.status(500).json({ status: false, message: error.message, stack: error.stack });
  }
};

export default jwtVerify;