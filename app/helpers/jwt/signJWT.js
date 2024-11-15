import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const signJWT = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
};

export default signJWT;