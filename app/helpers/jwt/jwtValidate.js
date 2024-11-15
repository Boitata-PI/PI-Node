import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import e from 'express';

dotenv.config();

const extractToken = (authHeader) => {
  return authHeader.replace('Bearer ', '');
};

const jwtValidate = (authHeader) => {
  var returnVal = false;

  if (!authHeader) return res.status(401).json({ status: false, message: 'No token provided.' });

  const token = extractToken(authHeader);

  jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
    if (error) {
      console.error(error);
    }

    returnVal = { error, decoded };
  });

  return returnVal;
};

export default jwtValidate;