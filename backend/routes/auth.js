const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

const router = express.Router();
//crete a user using  :POST "/API;AUTH EOESNT REQUIRE AUTH"
router.post('/', [
    body('email',"enter a valid email").isEmail(),
    body('name','enter a valid name').isLength({ min: 5 }),
    body('password').isLength({ min: 5 }),
],(req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
    }).then(user => res.json(user))
        .catch(err => console.log(err))
    res.json({
        error:'please enter a unique value for email'
    })
    
})
module.exports = router