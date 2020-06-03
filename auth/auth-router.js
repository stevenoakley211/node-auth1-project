const router = require('express').Router();
const User = require('../users/users-model.js')
const bcrypt =require('bcrypt')

router.post('/register', (req, res) =>{
    let user = req.body;
    const hash = bcrypt.hashSync(user.password,10)

    Users.add({
        username: user.username,
        password: hash
    })
    .then(res => res.status(200).json(res))
    .catch(err => res.status(500).json({message:"something went wrong",error:err}))
})

router.post("/login", (req, res) =>{
    const {username, password} = req.body;
    Users.findBy({ username }).first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)){
            req.sessionuser = user
        }
    })   
})