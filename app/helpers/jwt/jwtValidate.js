import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import e from 'express';

dotenv.config();

const jwtValidate = (token) => {
  var returnVal = false;

  if (!token) return res.status(401).json({ status: false, message: 'No token provided.' });

  jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
    if (error) {
      console.error(error);
    }

    returnVal = { error, decoded };
  });

  return returnVal;
};

export default jwtValidate;