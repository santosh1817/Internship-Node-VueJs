const express=require('express')
const router=express.Router()

const {usersRouter}=require('../controllers/UsersController')


//console.log('hi')
router.use('/users',usersRouter)


module.exports={
    routes:router
}