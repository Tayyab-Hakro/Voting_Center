import jwt from 'jsonwebtoken';

export const IsAuthentication = async (req, res, next) => {
    try {
        // Get token from different possible sources
        const token = req.headers.authorization?.split(' ')[1] || 
                     req.cookies?.token ||
                     req.header('x-auth-token');

        if (!token) {
            return res.status(401).json({ 
                success: false, 
                message: "Access denied. No token provided." 
            });
        }

        // Verify token
        const secretKey = process.env.JWT_SECRET;
        if (!secretKey) {
            throw new Error('JWT_SECRET is not defined in environment variables');
        }

        const decoded = jwt.verify(token, secretKey);
        
        // Attach user info to request object
        req.user = decoded;
        
        next();
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                success: false,
                message: "Invalid token"
            });
        } else if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                success: false,
                message: "Token has expired"
            });
        }
        
        return res.status(500).json({
            success: false,
            message: "Server error during authentication",
            error: error.message
        });
    }
};