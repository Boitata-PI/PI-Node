const guestVerify = (req, res, next) => {
    const token = req.headers['authorization'];

    if (token) return res.status(403).json({ auth: true, message: 'Forbidden.' });
    
    next();
};

export default guestVerify;