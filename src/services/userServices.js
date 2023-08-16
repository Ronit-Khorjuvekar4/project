const data = require('../userlist/userList.json')
const getAllUserService = async() => {

    // const movies = await Movies.find().sort({ createdAt: -1 })
    //     .then((result) => {
    //         return result
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // return movies

    const users = await data;
    console.log(users)
    return users
}

module.exports = {
    getAllUserService,
}