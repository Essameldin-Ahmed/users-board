const express = require('express');

const router = express.Router();

//admin to be fetch frim DB
const admin = {id:"1", userName: 'admin', password: 'admin123'}

router.post('/login', (req, res) => {
    if (admin.userName !== req.body.userName) {
        res.status(404).json({
            message: "This user isn't exist"
        })
        return
    }
    if (admin.password !== req.body.password) {
        res.status(401).json({
            message: 'Your password seems to be wrong'
        })
        return
    }
    res.status(200).json({
        jwt: "TestToken",
        userData: {
            id: admin.id,
            userName: admin.userName,
        }
    })

});
module.exports = router;