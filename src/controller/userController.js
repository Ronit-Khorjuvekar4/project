const userService = require('../services/userServices')

const getUser = async(req, res) => {
    const users = await userService.getAllUserService(req.body, req.file)
    res.json(users);
}

module.exports = {
    getUser,
}