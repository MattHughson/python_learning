var fs = require("fs");

var filePath = process.argv[2];
var fileData = "testing for the assignment should be printing out!.\n";

fs.writeFile(filePath, fileData, function(err) {
    // console.log(err)
  if (err) {

    throw err;
  }
  console.log(fileData)
});

