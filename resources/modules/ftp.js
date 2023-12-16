const { creatReadStream } = require("fs")

exports.FTP = (path, point) =>{
    this.Stream = creatReadStream(path).pipe(point)
}