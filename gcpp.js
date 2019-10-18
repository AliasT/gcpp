#!/usr/bin/env node

const { execSync } = require("child_process")
console.log(process.argv)
const [_, __, message = "updates"] = process.argv

execSync("git add .", { stdio: "inherit" })
execSync("git commit -m " + message, { stdio: "inherit" })
