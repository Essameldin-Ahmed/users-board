const express = require('express');
const checkAuth = require("../middleware/check-auth")
const uuidv4 = require("uuid/v4")

const router = express.Router();

//admin to be fetch frim DB
const users = [
    { id: "1", name: "Tray Steve", jobTitle: "Lead FrontEnd Developer", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "2", name: "Kevien Noba", jobTitle: "Senior FrontEnd Developer", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "3", name: "Elwin Shavill", jobTitle: "junior FrontEnd Developer", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "4", name: "Test User", jobTitle: "PA", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "5", name: "Test User 1", jobTitle: "Scrum Master", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "6", name: "Test User 2", jobTitle: "senior backend developer", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "7", name: "Test User 3", jobTitle: "Lead backend developer", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "8", name: "Test User 4", jobTitle: "junior backend developer", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "9", name: "Test User 5", jobTitle: "junior backend developer", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "10", name: "Test User 6", jobTitle: "junior backend developer", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "11", name: "Test User 7", jobTitle: "junior backend developer", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "12", name: "Test User 8", jobTitle: "junior backend developer", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "13", name: "Test User 9", jobTitle: "junior backend developer", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "14", name: "Test User 10", jobTitle: "Senior testing Eng", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
    { id: "15", name: "Test User 11", jobTitle: "junior testing Eng", thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg', profileImg: 'http://localhost:3000/content/images/users/1-big.jpg' },
]

router.get('', checkAuth, (req, res) => {
    if ((Number(req.query.start) + 1) > users.length ) {
        res.status(204).json({users: []})
    } else if ((Number(req.query.start) + Number(req.query.limit) + 1) > users.length) {
        res.status(200).json({latest:true, users: users.slice(req.query.start, (Number(req.query.start) + Number(req.query.limit)))})
    } else {
        res.status(200).json({users: users.slice(req.query.start, (Number(req.query.start) + Number(req.query.limit)))})

    }

});

router.post('', checkAuth, (req, res) => {
    let user = {
        id: uuidv4(),
        name: req.body.name,
        jobTitle: req.body.jobTitle,
        thumbProfileImg: 'http://localhost:3000/content/images/users/1.jpg',
        profileImg: 'http://localhost:3000/content/images/users/1-big.jpg'
    }
    users.unshift(user);
    res.status(201).json({ ...user })

});

router.put('', checkAuth, (req, res) => {

    let userIndex = users.findIndex((user) => user.id === req.body.id)

    if (userIndex > -1) {
        users[userIndex] = { ...users[userIndex], ...req.body }
        res.status(200).json(users[userIndex])
    } else {
        res.status(404).json({message: 'user is not found'})
    }

});

router.delete('/:id', checkAuth, (req, res) => {
    let userIndex = users.findIndex((user) => user.id === req.params.id)
    if (userIndex > -1) {
        users.splice(userIndex, 1)
        res.status(200).send()

    } else {
        res.status(404).json({message: 'user is not found'})
    }
});
module.exports = router;