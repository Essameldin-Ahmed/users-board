const express = require('express');
const checkAuth = require("../middleware/check-auth")

const router = express.Router();

//admin to be fetch frim DB
const users = [
    { id: "1", name: "Essam Mansour", jobTitle: "Lead FrontEnd Developer", profileImg: 'http://localhost:3000/images/1.jpg' }
]

router.get('', checkAuth, (req, res) => {
    res.status(200).json([...users])

});
module.exports = router;