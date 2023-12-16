//Imports
const { createServer } = require("http");
const { extname } = require("path");
const {createReadStream } = require("fs")
// const { ftp } = require("./ftp");

//Functions
const GET = (path, response) => {
  let ext = extname(path);
  let content = "text/html";

  switch (ext) {
    case ".css":
      content = "text/css";
      break;
    case ".js":
      content = "text/javascript";
      break;
    case ".png":
      content = "image/png";
      break;
    case ".jpg":
      content = "image/jpg";
      break;
    case ".svg":
      content = "image/svg+xml";
      break;
    default:
      content = "text/html";
      break;
  }

  response.writeHead(200, {"Content-Type":content})
  createReadStream(path).pipe(response)
};
const POST = () => {};
const ERROR = () => {};

//Module
exports.Server = (Path) => {
  createServer((req, res) => {
    if (req.method == "GET") GET(Path(req.url), res);
    else if (req.method == "POST") POST();
    else ERROR();
  }).listen(4444);
};

exports.Http = () => {};
