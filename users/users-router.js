const router  = require("express").Router()
const Users = require("./users-model")
restricted = require("./auth/risticted-middleware")


router.get("/", restricted, (req, res) =>{
 Users.find()
    .then(users =>{
        res.status(200).json(users)
    })
    .catch(err =>{
        res.status(404).json({message:"user not found", error:err})
    })
})

module.exports = router;