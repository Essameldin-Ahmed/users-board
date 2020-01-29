const express = require('express');
const checkAuth = require("../middleware/check-auth")

const router = express.Router();

//admin to be fetch frim DB
const users = [
    { id: "1", name: "Essam Mansour", jobTitle: "Lead FrontEnd Developer", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "2", name: "Kevien Noba", jobTitle: "Lead FrontEnd Developer", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "3", name: "Elwin Shavill", jobTitle: "Lead FrontEnd Developer", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "4", name: "Essam Mansour", jobTitle: "Lead FrontEnd Developer", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "5", name: "Essam Mansour", jobTitle: "Lead FrontEnd Developer", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "6", name: "Essam Mansour", jobTitle: "Lead FrontEnd Developer", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "7", name: "Essam Mansour", jobTitle: "Lead FrontEnd Developer", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "8", name: "Essam Mansour", jobTitle: "Lead FrontEnd Developer", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "9", name: "Essam Mansour", jobTitle: "Lead FrontEnd Developer", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "10", name: "Essam Mansour", jobTitle: "Lead FrontEnd Developer", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "11", name: "Essam Mansour", jobTitle: "Lead FrontEnd Developer", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "12", name: "Essam Mansour", jobTitle: "Lead FrontEnd Developer", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "13", name: "Essam Mansour", jobTitle: "Lead FrontEnd Developer", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "14", name: "Essam Mansour", jobTitle: "Lead FrontEnd Developer", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "15", name: "Essam Mansour", jobTitle: "Lead FrontEnd Developer", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
]

router.get('', checkAuth, (req, res) => {
    res.status(200).json([...users])

});
module.exports = router;