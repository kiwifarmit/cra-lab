const { exec } = require("child_process");

const userInput = process.argv[2];

exec("echo " + userInput);
