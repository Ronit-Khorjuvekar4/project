const data = require('../userlist/userList.json')
const getAllUserService = async() => {

    const users = await data;
    console.log(users)
    return users
}

module.exports = {
    getAllUserService,
}