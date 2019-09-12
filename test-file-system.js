var fs = require("fs");

var filePath = process.argv[2];
var fileData = "testing for the assignment.\n";

fs.writeFile(filePath, fileData, function(err) {
  if (err) {
    throw err;
  }
  console.log("Successfully wrote to", filePath);
});

