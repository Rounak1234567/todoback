const mongoose = require("mongoose");

module.exports = () => {
    console.log("db me hu")
    return mongoose.connect("mongodb+srv://todoApp:todoApp@project2.g1ui4si.mongodb.net/?retryWrites=true&w=majority")
}