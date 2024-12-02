const guestVerify = (req, res, next) => {
    const token = req.cookies.token;

    if (token) return res.status(403).json({ auth: true, message: 'Forbidden.' });
    
    next();
};

export default guestVerify;