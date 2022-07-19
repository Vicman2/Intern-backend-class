const userService = require('../services/user.service')
const bcrypt = require('bcryptjs')


class  UserCtrl{


    async createUser(req, res, next){
        const theUserData = req.body;

        // We look for an existing user
        const existingUser = await userService
            .getUserWithQuery({email: theUserData.email})
        // If the User already exists, we throw an error 
        if(existingUser){
            res.status(400).send({message: "User already exists"})
        }
        // At this point we have a unique use
        // Hash the password of the user
        const hashedPassword = await bcrypt.hash(theUserData.password, 12)
        theUserData.password = hashedPassword


        // Save it to db
        const createdUser = await userService.createUser(theUserData)

        res
            .status(201)
            .send({message: 'User created successfully', data: createdUser})
    }
}

module.exports = new UserCtrl()