
module.exports = (req, res, next) => {
    try {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(" ")[1];
            if(token === "TestToken") {
                next();
                return
            }
        }
        res.status(401).json({
            message: 'Auth Faild'
        })
        
    } catch (err) {
        res.status(401).json({
            message: 'Auth Faild'
        })
    }


}