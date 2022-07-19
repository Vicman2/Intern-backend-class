const UserModel = require('../models/user.schema')
class UserService{

    async getUserWithQuery(query){
        const theUser = await UserModel.findOne(query)
        return theUser;
    }

    async getUser(id){
        const theUser = await UserModel.findOne({id})
        return theUser
    }

    async createUser(userData){
        const newUser = await UserModel.create(userData);
        return newUser
    }

    async updateUser(id, userData){
        const theUpdated = await UserModel
            .findByIdAndUpdate(id, userData, {new: true});
        return theUpdated
    }

    async deleteUser(id){
        const theDeletedUser = await UserModel
            .findByIdAndDelete(id);
        return theDeletedUser
    }
}


module.exports = new UserService()