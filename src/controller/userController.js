const userService = require('../services/userServices')
const NodeCache = require("node-cache");
const myCache = new NodeCache();

const getUser = async(req, res) => {
    const users = await userService.getAllUserService(req.body, req.file)
    data = myCache.set("key", users, 20000);
    value = myCache.get("myKey");

    console.log("caches:", value)
    res.json(users);
}

module.exports = {
    getUser,
}