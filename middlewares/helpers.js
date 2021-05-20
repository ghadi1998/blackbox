const fs = require("fs")
function getBase64(file) {
  data = fs.readFileSync(file);
  data.toString('base64')
  console.log(data.toString('base64'))
}

module.exports = getBase64;
