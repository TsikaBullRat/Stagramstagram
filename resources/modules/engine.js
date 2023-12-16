// Imports
const { join } = require("path")
const { Server } = require("./http")

//Variables
const Site = (url) => join(__dirname, "../../docs", url === "/"?"index.html":url )

exports.Run = () =>{
    Server( Site )
}